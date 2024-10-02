import { type Page, type Locator, expect } from "@playwright/test";
import { Step } from "../../decorators";
import { TaskStatus } from "../utils/utils";

export class ModalDialog{

  readonly page: Page;
  readonly closeButton: Locator;
  readonly titleInput: Locator;
  readonly statusSelector: Locator;
  readonly addTaskButton: Locator;
  readonly cancelButton: Locator;
  readonly modalContainer: Locator;

 constructor(page: Page) {
  this.page = page;
  this.modalContainer = page.locator("xpath = .//*[contains(@class,'modal_container')]")
  this.closeButton = page.locator("xpath = .//*[contains(@class,'modal_closeButton')]")
  this.titleInput = page.locator("xpath = .//input[contains(@id,'title')]")
  this.statusSelector = page.locator("xpath = .//select[contains(@id,'type')]")
  this.addTaskButton = page.locator("xpath = .//*[contains(@class,'modal_button')]//button[text()='Add Task']")
  this.cancelButton = page.locator("xpath = .//*[contains(@class,'modal_button')]//button[text()='Cancel']")
 }

 @Step('Set Item Title to "{0}"')
 async setItemTitle(title: string) {
    await this.titleInput.fill(title)
    await expect(this.titleInput).toHaveValue(title)
 }

 @Step('Await until modal page is closed')
 async awaitModalDialogIsClosed() {
   await expect(this.modalContainer).toBeHidden()
}

 @Step('Set item status to "{0}"')
 async setItemStatus(status: TaskStatus ) {
    await this.statusSelector.selectOption(status)
 }

 @Step('Click on X button')
 async clickOnCloseButton() {
    await this.closeButton.click()
    await this.awaitModalDialogIsClosed()
 }

 @Step('Click on Add Task button')
 async clickOnAddTaskButton() {
    await this.addTaskButton.click()
    await this.awaitModalDialogIsClosed()
 }

 @Step('Click on Cancel button')
 async clickOnCancelButton() {
   await this.cancelButton.click()
   await this.awaitModalDialogIsClosed()
 }
}
