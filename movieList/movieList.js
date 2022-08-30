const { By } = require("selenium-webdriver");

module.exports = {
  addMovie: async (driver) => {
    await driver
      .findElement(By.xpath("//input"))
      .sendKeys("Back-to-the-Future");

    await driver.findElement(By.xpath("//button")).click();

    const movie = await driver.findElement(By.xpath("//li"));
    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy();
  },

  // crossOffMovie: async(driver) => {
  //   // await driver. findElement(By.xpath("//*[text()="Back to the Future"]")).click();
  //   await driver.findElement(By.xpath("//li")).click();
  //   const isChecked = await driver.findElement(By.xpath("//li"));
  //   expect(findElement(By.xpath('//*[contains(@class,'checked')]'))).toBeTruthy;
    
  // },

  deleteMovie: async(driver) => {
     await driver.findElement(By.id('Back-to-the-Future')).click();
   
    
    const movie = await driver.findElement(By.xpath("//li"));
    const displayed = movie.isDisplayed();
    expect(displayed).toBe("False");
  },
}
