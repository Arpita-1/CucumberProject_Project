package stepdefs;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepdef {
	
	WebDriver  driver=HooksClass.driver;
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
	    
	    
	}
//correct user name and password
	
	@When("I enter the correct  username as {string} and password as {string}")
	public void i_enter_the_correct_username_as_and_password_as(String username, String password) {
 // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(username);
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(password);
	    
	}

	@When("I click on the Login Button")
	public void i_click_on_the_Login_Button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement LoginBtn = driver.findElement(By.name("login-button"));
		LoginBtn.click();
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
			 
			System.out.println("You are Login successfully.");
			 
	   
	}
// Wrong user name and password from data table using outline scenarios and example.
	@When("I enter the username as {string} and password as {string}")
	public void i_enter_the_username_as_and_password_as(String username, String password) {
    // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys(username);
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(password);
	    
	}
	
	@Then("I should get the error message  as {string}")
	public void i_should_get_the_error_message_as(String ExpError) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Error = driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActError = Error.getText();
		Assert.assertEquals(ExpError, ActError);

	}

}
