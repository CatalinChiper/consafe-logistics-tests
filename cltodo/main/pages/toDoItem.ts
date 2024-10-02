import { type Page, type Locator, expect } from "@playwright/test";
import { Step } from "../../decorators";

export class ToDoItem{

  readonly page: Page;
  readonly itemTitle: Locator;
  readonly checkBox: Locator;
  readonly checkboxTick: Locator;

 constructor(page: Page) {
  this.page = page;
  this.itemTitle = page.locator("xpath = .//*[contains(@class,'todoItem_todoText')]")
  this.checkBox = page.locator("xpath = .//*[contains(@class,'todoItem_svgBox')]")
  this.checkboxTick = this.checkBox.locator("xpath = .//*[local-name()='svg']/*[local-name()='path']")
 }

 @Step('Check that toDoItem with title "{0}" is visible')
 async checkItemWithTitleIsDisplayed(title: string) {
    await expect(this.itemTitle).toHaveText(title)
 } 

 @Step('Check that status checkbox is ticked')
 async checkStatusCheckboxIsTicked() {
   await expect(this.checkboxTick).toHaveAttribute("opacity", "1")
 }

 @Step('Check that status checkbox is ticked')
 async checkStatusCheckboxIsUnTicked() {
   await expect(this.checkboxTick).toHaveAttribute("opacity", "0")
 }

}
