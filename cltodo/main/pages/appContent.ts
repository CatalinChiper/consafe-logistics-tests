import { type Page, type Locator, expect } from "@playwright/test";
import { Step } from "../../decorators";
import { LOCAL_URL } from "../utils/utils";
import { ToDoItem } from "./toDoItem";

export class AppContent{

  readonly page: Page;
  readonly app_empty_text: Locator;
  public toDoItem: ToDoItem

 constructor(page: Page) {
  this.page = page;
  this.app_empty_text = page.locator("xpath = .//*[contains(@class,'app_emptyText')]")
 }

 @Step('Check that app empty state is displayed') 
async checkAppEmptyStateIsVisible(){
  await expect(this.app_empty_text).toBeVisible()
}

@Step('Check that app empty state has correct text')
async checkAppEmptyStateHasText(text: string) {
   await expect(this.app_empty_text).toHaveText(text)
}

}