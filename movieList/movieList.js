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

  crossOffMovie: async(driver) => {
    // await driver. findElement(By.xpath("//*[text()="Back to the Future"]")).click();
    await driver.findElement(By.xpath("//span")).click();
    // const isChecked = await driver.findElement(By.xpath("//li"));
    expect(driver.findElement(By.xpath("//*[contains(@class,'checked')]"))).toBeTruthy;
    
  },

  // deleteMovie: async(driver) => {
  //   const movie =  await driver.findElement(By.id('Back-to-the-Future'));
  //   console.log(driver.findElement(By.id('Back-to-the-Future')))
  //    await driver.findElement(By.id('Back-to-the-Future')).click();
  //    console.log(movie)
    
   
  //   expect(movie.textContent).toBeFalsy;
  // },
}
