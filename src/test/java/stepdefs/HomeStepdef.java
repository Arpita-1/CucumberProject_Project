package stepdefs;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomeStepdef {
	WebDriver  driver=HooksClass.driver;
	int itemcount=0;
	//add single product by giving dynamic xpath and the product will be added after click on product->add to cart 
	@When("I click add to cart for Product as {string}")
	
	public void i_click_add_to_cart_for_Product_as(String Product) {
		 // Write code here that turns the phrase above into concrete actions
		String xpath = "//div[@class='inventory_item_name' and contains(text(),'" + Product + "')]";
		WebElement ProductName = driver.findElement(By.xpath(xpath));
		ProductName.click();	
		String productxpath= "//button[@class='btn btn_primary btn_small btn_inventory' and contains(text(),'Add to cart')]";
		WebElement AddTocartbutton = driver.findElement(By.xpath(productxpath));
	
		AddTocartbutton.click();	
     
	}

	@Then("Cart item count should be {int}")
	public void cart_item_count_should_be(int count) {
	    // Write code here that turns the phrase above into concrete actions
		
		WebElement AddCart=driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
	
		itemcount=Integer.parseInt(AddCart.getText());
		Assert.assertEquals(count,itemcount);
		System.out.println("Item count is: "+itemcount);
		
		
		

	}
	
//using data table to add multiple products by giving dynamic xpath
	@When("I add below Products")
	public void i_add_below_Products(List<String> Products) {
		
		for(String product:Products) {
			
			String xpath = "//div[text()='" +  product + "']//following::button[1]";
			WebElement ProductName = driver.findElement(By.xpath(xpath));
			ProductName.click();	
			
		}
		
		
		}

	}


