import { type Page, type Locator, expect } from "@playwright/test";
import { Step } from "../../decorators";
import { LOCAL_URL } from "../utils/utils";
import { AppContent } from "./appContent";
import { ModalDialog } from "./modalDialog";

export class ToDoPage{

  readonly page: Page;
  readonly addTask_button: Locator;
  readonly filter_dropdown: Locator;
  readonly app_title: Locator;
  public app_content: AppContent
  public modal_dialog: ModalDialog

 constructor(page: Page) {
  this.page = page;
  this.addTask_button = page.getByRole("button", {name: 'Add Task'}),
  this.filter_dropdown = page.getByTestId("status")
  this.app_title = page.locator("xpath = .//*[contains(@class,'title_title')]")
 }
 
 @Step('Open Application Page')
 async openToDoPage() {
  await this.page.goto(LOCAL_URL)
 }

 @Step('Check that page has correct title')
 async checkPageTitle(pageTitle: string) {
  await expect(this.app_title).toHaveText(pageTitle)
 }
 
 @Step('Click on the "Add Task" button') 
 async clickAddTaskButton() {
  await this.addTask_button.click()
 }

 @Step('Click on the filter dropdown')
 async clickOnFilterDropdown() {
  await this.filter_dropdown.click()
 }


}