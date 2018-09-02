package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import core.PageObject;
import util.DriverFactory;

public class AddToCartPage extends PageObject{
	
	private HomePage homePage;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"hlb-subcart\"]/div[1]/span/span[1]/text()")
	private WebElement cartItemCount;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"hlb-subcart\"]/div[1]/span/span[2]")
	private WebElement cartPrice;
	
	@FindBy(how=How.ID, using="nav-link-accountList")
	private WebElement nav_link_accountList;
	
	@FindBy(how=How.XPATH, using="//a[@tabindex='62']")
	private WebElement tabindex;
	
	@FindBy(how=How.XPATH, using="//*[@id=\"gutterCartViewForm\"]/div[3]/div/div/div[1]/p/span/span[2]")
	private WebElement cartPriceValue;
	
	
	
	public String getItemCountInTheCart() throws Exception {
		waitForElement(cartItemCount);
		String count = cartItemCount.getText();
		return count;
	}

	public String getItemPrice() throws Exception {
		String count = cartPrice.getText();
		return count;
	}
	
	public HomePage logoutFromAddToCartPage() throws InterruptedException{
		Actions a= new Actions(DriverFactory.getInstance().getDriver());
		a.moveToElement(nav_link_accountList).build().perform();
		DriverFactory.getInstance().getDriver().manage().window().maximize();
		a.moveToElement(tabindex).build().perform(); 
		JavascriptExecutor js = (JavascriptExecutor) DriverFactory.getInstance().getDriver();
		js.executeScript("arguments[0].scrollIntoView();", tabindex);
		Thread.sleep(5000);
		WebDriverWait wait = new WebDriverWait(DriverFactory.getInstance().getDriver(),20);
		WebElement element;
		element= wait.until(ExpectedConditions.visibilityOfElementLocated(By.partialLinkText("Sign Out"))); 
		Thread.sleep(5000);
		DriverFactory.getInstance().getDriver().findElement(By.partialLinkText("Sign Out")).click();
		System.out.println("Log out");
		homePage = PageFactory.initElements(DriverFactory.getInstance().getDriver(), HomePage.class);
		return homePage;
	}
	
	public String getCartItemPrice() throws Exception {
		waitForElement(cartPriceValue);
		String itemPrice = cartPriceValue.getText();
		return itemPrice;
	}
	
}
