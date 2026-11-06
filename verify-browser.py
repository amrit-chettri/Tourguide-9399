import asyncio, json
from playwright.async_api import async_playwright

async def main():
    errors = []
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        page = await browser.new_page(viewport={'width': 1440, 'height': 1000}, device_scale_factor=1)
        page.on('pageerror', lambda error: errors.append(str(error)))
        async def visit(path):
            await page.goto('http://localhost:4200' + path)
            await page.locator('h1').wait_for()
            await page.evaluate('document.fonts.ready')
        async def overflow():
            assert await page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Horizontal overflow'
        await visit('/home')
        assert await page.locator('.destination-card').count() == 6
        assert await page.locator('.guide-card').count() == 0
        await page.locator('.destinations-section').screenshot(path='/home/user/nepguide-premium-destinations.png')
        await page.locator('.hero-button').click()
        await page.wait_for_url('**/guides')
        assert await page.locator('.guide-card').count() == 10
        assert await page.locator('.avatar').count() == 0
        assert await page.locator('.guide-bio').count() == 10
        await page.locator('.guide-card').first.screenshot(path='/home/user/nepguide-premium-guide.png')
        destinations = [('Everest', 'everest', 'Everest', 4), ('Annapurna', 'annapurna', 'Annapurna', 3), ('Langtang', 'langtang', 'Langtang', 3), ('Poon Hill', 'poon-hill', 'Annapurna', 3), ('Mardi Himal', 'mardi-himal', 'Annapurna', 3), ('Manaslu', 'manaslu', None, 0)]
        for region, slug, guide_region, count in destinations:
            await visit('/home')
            await page.get_by_role('link', name='Explore ' + region, exact=True).click()
            await page.wait_for_url('**/destinations/' + slug)
            assert await page.locator('h1').inner_text() == region
            assert await page.locator('.region-gallery img').count() == 3
            await page.locator('.region-gallery').scroll_into_view_if_needed()
            await page.locator('.region-routes').scroll_into_view_if_needed()
            assert await page.evaluate('Array.from(document.querySelectorAll(".region-gallery img")).every(i => i.complete && i.naturalWidth > 0)')
            await overflow()
            await page.screenshot(path='/home/user/nepguide-' + slug + '-desktop.png', full_page=True)
            await page.locator('.region-guide-cta a').click()
            if not guide_region:
                await page.wait_for_url('**/contact')
                assert await page.locator('.guide-card').count() == 0
                assert await page.evaluate('scrollY') > 0
                results.append('Manaslu: detail page + gallery + contact CTA passed')
                continue
            await page.wait_for_url('**/guides?region=' + guide_region)
            assert await page.locator('.guide-card').count() == count
            await page.reload()
            assert await page.locator('.guide-card').count() == count
            await page.get_by_role('button', name='All regions', exact=True).click()
            assert await page.locator('.guide-card').count() == 10
            await page.go_back()
            assert await page.locator('.guide-card').count() == count
            results.append(region + ': destination + gallery + filtered guides + refresh + back passed')
        await visit('/guides?region=invalid')
        assert await page.locator('.guide-card').count() == 10
        await page.locator('.whatsapp-button').first.click()
        assert await page.locator('dialog').is_visible()
        await page.get_by_role('button', name='Got it').click()
        for width in [1024, 768, 390, 360]:
            await page.set_viewport_size({'width': width, 'height': 900})
            for path in ['/home', '/guides'] + ['/destinations/' + item[1] for item in destinations]:
                await visit(path)
                await overflow()
                if width == 390:
                    await page.screenshot(path='/home/user/nepguide-premium-' + path.strip('/').replace('/', '-') + '-mobile.png', full_page=True)
            results.append(str(width) + 'px: all eight pages have no horizontal overflow')
        await visit('/home')
        await page.get_by_role('button', name='Open navigation').click()
        await page.locator('nav').get_by_role('link', name='Find a guide', exact=True).click()
        assert await page.locator('.guide-card').count() == 10
        assert not await page.locator('nav').is_visible()
        for path, section in [('/contact', 'contact'), ('/how-it-works', 'how-it-works')]:
            await visit(path)
            assert await page.locator('.guide-card').count() == 0
            assert await page.evaluate('scrollY') > 0
        links = await page.locator('.contact-channel').evaluate_all('(els) => els.map(e => e.getAttribute("href"))')
        assert links == ['https://www.whatsapp.com/', 'https://www.facebook.com/', 'https://www.instagram.com/', 'mailto:']
        assert not errors, errors
        print(json.dumps({'checks': results, 'pageErrors': errors, 'socialLinks': links}, indent=2))
        await browser.close()

asyncio.run(main())