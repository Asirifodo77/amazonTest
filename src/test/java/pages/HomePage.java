package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.PageObject;
import util.DriverFactory;

public class HomePage extends PageObject{
	
	private ProductPage productPage;
	private AddToCartPage addToCartPage;
	
	@FindBy(how=How.ID, using="nav-logo")
	private WebElement amazonLogo;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"nav-logo\"]/a[1]/span[1]")
	private WebElement amazonLogoText;
	
	@FindBy(how=How.ID, using="nav-link-accountList")
	private WebElement amazonLoginLink;
	
	@FindBy(how=How.ID, using="ap_email")
	private WebElement loginEmail_textBox;
	
	@FindBy(how=How.ID, using="continue")
	private WebElement loginEmailContinue_button;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"auth-error-message-box\"]/div/div/ul/li")
	private WebElement loginError_text;
	
	@FindBy(how=How.ID, using="ap_password")
	private WebElement loginEmailPassword_textBox;
	
	@FindBy(how=How.ID, using="signInSubmit")
	private WebElement signInSubmit_button;
	
	@FindBy(how=How.ID, using="twotabsearchtextbox")
	private WebElement tabSearchTextBox_textbox;
	
	@FindBy(how=How.XPATH, using="//input[@type='submit']")
	private WebElement searchBox_button;
	
	@FindBy(how=How.XPATH, using="//img[@class='s-access-image cfMarker']")
	private WebElement firstElementOnPresent;
	
	@FindBy(how=How.ID, using="add-to-cart-button")
	private WebElement addToCart_button;
	
	@FindBy(how=How.ID, using="nav-cart")
	private WebElement clickCartButton;
	
	
	public boolean checkHomePageLoaded(){
		return isPageLoaded(amazonLogo);
	}

	public String getAmazonLogoString() {
		return amazonLogoText.getText();
	}

	public void loginIntoAmazonInvalidUsername(String username, String password) {
		waitElementToBeClickable(amazonLoginLink);
		clickElement(amazonLoginLink);
		waitElementToBeClickable(loginEmail_textBox);
		setText(loginEmail_textBox, username);
		clickElement(loginEmailContinue_button);
	}
	
	public void loginIntoAmazon(String username, String password) {
		waitElementToBeClickable(amazonLoginLink);
		clickElement(amazonLoginLink);
		waitElementToBeClickable(loginEmail_textBox);
		setText(loginEmail_textBox, username);
		clickElement(loginEmailContinue_button);
		waitElementToBeClickable(signInSubmit_button);
		setText(loginEmailPassword_textBox, password);
		clickElement(signInSubmit_button);		
	}
	
	public String getLoginErrorMessage() {
		waitElementToBeClickable(loginError_text);
		return loginError_text.getText();
	}
	
	public void searchItem(String itemName) {
		waitElementToBeClickable(tabSearchTextBox_textbox);
		setText(tabSearchTextBox_textbox, itemName);
		clickElement(searchBox_button);
	}
	
	public ProductPage clickFirstItemInVisible() {
		clickElement(firstElementOnPresent);
		try {
			waitForElement(addToCart_button);
		} catch (Exception e) {
			e.printStackTrace();
		}
		productPage = PageFactory.initElements(DriverFactory.getInstance().getDriver(), ProductPage.class);
		return productPage;
	}
	
	public AddToCartPage clickOnTheCart() {
		clickElement(clickCartButton);
		addToCartPage = PageFactory.initElements(DriverFactory.getInstance().getDriver(), AddToCartPage.class);
		return addToCartPage;
	}
	
}



