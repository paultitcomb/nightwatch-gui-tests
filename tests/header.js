module.exports = {
	beforeEach: function(browser) {
		browser.resizeWindow(411, 731);
	},
	'Mobile menu opens and closes': function(browser) {
		browser
			.url('https://aem-staging-uk.stcdev.com')
			.waitForElementVisible('body', 1000)
			.moveToElement('.header-mobile-menu-open', 0, 0)
			.mouseButtonClick(0)
			.waitForElementVisible('.ui-navigation-mob', 500)
			.pause(2000)
			.moveToElement('.header-mobile-menu-close', 0, 0)
			.mouseButtonClick(0)
			.assert.hidden('.ui-navigation-mob')
			.pause(2000);
	},

	'When the menu is clicked, the sub menu is opened': function(browser) {
		browser
			.url('https://aem-staging-uk.stcdev.com')
			.waitForElementVisible('body', 1000)
			.moveToElement('.header-mobile-menu-open', 0, 0)
			.mouseButtonClick(0)
			.waitForElementVisible('.ui-navigation-mob', 500)
			.pause(2000)
			.assert.hidden('.ui-nav-list-mob > li:nth-child(1) .ui-nav-flyout-group')
			.click('.ui-nav-list-mob > li:nth-child(1) a')
			.pause(500)
			.assert.visible('.ui-nav-list-mob > li:nth-child(1) .ui-nav-flyout-group')
			.pause(2000)
			.click('.ui-nav-list-mob > li:nth-child(3) a')
			.pause(500)
			.assert.hidden('.ui-nav-list-mob > li:nth-child(1) .ui-nav-flyout-group')
			.assert.visible('.ui-nav-list-mob > li:nth-child(3) .ui-nav-flyout-group')
			.pause(2000)
			.moveToElement('.header-mobile-menu-close', 0, 0)
			.mouseButtonClick(0)
			.pause(2000)
			.moveToElement('.header-mobile-menu-open', 0, 0)
			.mouseButtonClick(0)
			.waitForElementVisible('.ui-navigation-mob', 500)
			.assert.hidden('.ui-nav-list-mob > li:nth-child(3) .ui-nav-flyout-group')
			.pause(2000);
	},

	'Mobile menu opens and search is performed with results': function(browser) {
		browser
			.url('https://aem-staging-uk.stcdev.com')
			.waitForElementVisible('body', 1000)
			.moveToElement('.header-mobile-menu-open', 0, 0)
			.mouseButtonClick(0)
			.waitForElementVisible('.ui-navigation-mob', 500)
			.pause(2000)
			.click('.ui-mob-flyout-search .search-btn')
			.assert.visible('.ui-mob-flyout-search .search-box')
			.setValue('.ui-mob-flyout-search .search-box', 'india')
			.pause(1000)
			.click('.ui-mob-flyout-search button.search-icon')
			.waitForElementVisible('body', 2000)
			.assert.urlContains('/misc/search-results?query=india')
			.expect.element('.search-results-count')
			.text.to.not.contain('0');
		browser.pause(2000).end();
	}
};
