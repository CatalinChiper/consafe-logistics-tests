import { generateRandomString, test } from "../decorators"
import { TaskStatus } from "../main/utils/utils"

const TASK_TITLE = generateRandomString(5)

test.beforeEach(async ({toDoPage, modalPage}) => {
    await toDoPage.openToDoPage(),
    await toDoPage.clickAddTaskButton()
    await modalPage.setItemTitle(TASK_TITLE)
})

test("Check that X button is functional", async ({modalPage, appContentPage}) => {
    await modalPage.clickOnCloseButton()
    await appContentPage.checkAppEmptyStateIsVisible()
})

test("Check that Cancel button is functional", async({modalPage, appContentPage}) => {
    await modalPage.clickOnCancelButton()
    await appContentPage.checkAppEmptyStateIsVisible()
})

test("Check that Add Task button is functional", async({modalPage, toDoItem}) => {
    await modalPage.clickOnAddTaskButton()
    await toDoItem.checkItemWithTitleIsDisplayed(TASK_TITLE)
})

test("Check that Status from modal dialog can be set to complete", async({modalPage, toDoItem}) => {
    await modalPage.setItemStatus(TaskStatus.complete)
    await modalPage.clickOnAddTaskButton()
    await toDoItem.checkStatusCheckboxIsTicked()
})

test("Check that Status from modal dialog is incomplete by default", async({modalPage, toDoItem}) => {
    await modalPage.clickOnAddTaskButton()
    await toDoItem.checkStatusCheckboxIsUnTicked()
})

test("Check that Status from modal dialog can be set to incomplete", async({modalPage, toDoItem}) => {
    await modalPage.setItemStatus(TaskStatus.complete)
    await modalPage.setItemStatus(TaskStatus.incomplete)
    await modalPage.clickOnAddTaskButton()
    await toDoItem.checkStatusCheckboxIsUnTicked()
})
