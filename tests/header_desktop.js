module.exports = {
	'Desktop - Click donate button takes you to the donate hub': function(browser) {
		browser
			.resizeWindow(1200, 800)
			.url('https://aem-qa1-uk.stcdev.com/')
			.waitForElementVisible('body', 1000)
			.click('.header-donate a')
			.waitForElementVisible('body', 2000)
			.assert.title('Donate | Save the Children UK')
			.assert.visible('.donate-now')
			.assert.visible('a[data-type="monthly"]')
			.assert.visible('a[data-type="single"]');
	},

	'Desktop - clicking search icon opens search box then closes it again on blur': function(browser) {
		browser
			.url('https://aem-qa1-uk.stcdev.com/')
			.waitForElementVisible('.search-btn-wrapper .search-btn', 2000)
			.moveToElement('.search-btn-wrapper .search-btn', 0, 0)
			.mouseButtonClick(0)
			.pause(2000)
			.assert.visible('.header-search .search-box')
			.moveToElement('.ui-component.header', 300, 5)
			.mouseButtonClick(0)
			.pause(2000)
			.assert.hidden('.header-search .search-box')
			.pause(2000);
	},

	'Desktop - menu item opens sub menu, close it by clicking on the x': function(browser) {
		browser
			.url('https://aem-qa1-uk.stcdev.com/')
			.waitForElementVisible('.ui-navigation-desk', 2000)
			.assert.hidden('.ui-flyout[data-index="0"]')
			.moveToElement('.ui-nav-list-item[data-index="0"] a', 0, 0)
			.mouseButtonClick(0)
			.pause(1000)
			.assert.visible('.ui-flyout[data-index="0"]')
			.assert.attributeContains('.ui-nav-list-item[data-index="0"]', 'class', 'ui-navigation-clicked')
			.pause(1000)
			.moveToElement('.ui-flyout[data-index="0"] .flyout-close-icon', 0, 0)
			.mouseButtonClick(0)
			.pause(1000)
			.assert.hidden('.ui-flyout[data-index="0"]')
			.pause(1000);
	},

	'Desktop - menu item opens 1st sub menu, click to open 2nd sub menu': function(browser) {
		browser
			.url('https://aem-qa1-uk.stcdev.com/')
			.waitForElementVisible('.ui-navigation-desk', 2000)
			.assert.hidden('.ui-flyout[data-index="0"]')
			.moveToElement('.ui-nav-list-item[data-index="0"] a', 0, 0)
			.mouseButtonClick(0)
			.pause(1000)
			.assert.visible('.ui-flyout[data-index="0"]')
			.assert.attributeContains('.ui-nav-list-item[data-index="0"]', 'class', 'ui-navigation-clicked')
			.pause(1000)
			.moveToElement('.ui-nav-list-item[data-index="1"] a', 0, 0)
			.mouseButtonClick(0)
			.pause(1000)
			.assert.hidden('.ui-flyout[data-index="0"]')
			.getAttribute('.ui-nav-list-item[data-index="0"]', 'class', function(result) {
				const hasActiveClass = result.value.includes('ui-navigation-clicked');
				this.assert.equal(hasActiveClass, false);
			})
			.assert.visible('.ui-flyout[data-index="1"]')
			.assert.attributeContains('.ui-nav-list-item[data-index="1"]', 'class', 'ui-navigation-clicked')
			.pause(1000)
			.end();
	}
};
