package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import core.PageObject;
import util.DriverFactory;

public class ProductPage extends PageObject{
	
	private AddToCartPage addToCartPage;

	@FindBy(how=How.ID, using="add-to-cart-button")
	private WebElement addToCart_button;
	
	@FindBy(how=How.ID, using="priceblock_ourprice")
	private WebElement productPrice;
	
	@FindBy(how=How.ID, using="productTitle")
	private WebElement productTitle;
	
	@FindBy(how=How.ID, using="quantity")
	private WebElement productQuantity;
	
	@FindBy(how=How.ID, using="huc-v2-order-row-confirm-text")
	private WebElement addToCartMessage;
	
	
	public boolean checkProductPageLoaded(){
		return isPageLoaded(addToCart_button);
	}
	
	public String getProductPrice() {
		return productPrice.getText();
	}
	
	public String getProductName() {
		return productTitle.getText();
	}
	
	public AddToCartPage addItemToTheCart(String productCount) {
		Select prodcutSelectCnt = new Select(productQuantity);
		prodcutSelectCnt.selectByVisibleText(productCount);
		clickElement(addToCart_button);	
		addToCartPage = PageFactory.initElements(DriverFactory.getInstance().getDriver(), AddToCartPage.class);
		return addToCartPage;
	}
	
	public String readAddToCartMessage() throws Exception {
		waitForElement(addToCartMessage);
		String message = addToCartMessage.getText();
		return message;
	}
	
	
	
}
