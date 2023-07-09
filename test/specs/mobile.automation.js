import SplashscreenPage from '../pageobjects/splashscreen.page';
import HomePage from '../pageobjects/home.page';
import WelcomePage from '../pageobjects/welcome.page';

describe('Test Suite diet-meal.apk', () => {
    it('(TC_DIET_001) - Open App and Fill in user form with valid input', async () => {
        //asserting Splash Screen Page
        await expect(SplashscreenPage.splashLogo).toExist()
        await expect(SplashscreenPage.splashText).toExist()
        await expect(SplashscreenPage.splashText).toHaveText('Empat Sehat, Lima Sempurna')

        //asserting Welcome Formulir Page
        await expect(WelcomePage.headerWelcome).toExist()
        await expect(WelcomePage.headerWelcome).toHaveText('Welcome...')
        await expect(WelcomePage.headerDesc).toExist()
        await expect(WelcomePage.headerDesc).toHaveText('Isi formulir untuk membuat/menambahkan user')

        //input user data
        await WelcomePage.inputName.setValue("Rifqi Ardian Pratama")
        await WelcomePage.inputWeight.setValue("67")
        await WelcomePage.inputHeight.setValue("178")
        await WelcomePage.chooseGenderMale.click()

        //proceed to next page
        await WelcomePage.buttonNext.click()

        //choose activity
        await WelcomePage.chooseActivity.click()

        //proceed finish input user data
        await WelcomePage.buttonFinish.click()

        //assert homepage
        await expect(HomePage.homeTitleHeader).toExist()
        await expect(HomePage.homeTitleHeader).toHaveText('Hi,')
        await expect(HomePage.homeDescriptionHeader).toExist()
        await expect(HomePage.homeDescriptionHeader).toHaveText('Ready to some calories today?')
        await expect(HomePage.buttonHome).toExist()
        await expect(HomePage.buttonHome).toHaveText('Home')

        //restart app
        //await driver.closeApp();
        //await driver.launchApp();
    })

})