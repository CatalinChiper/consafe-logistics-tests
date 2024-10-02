import { test } from '../decorators'

const PAGE_TITLE = "TODO List"
const EMPTY_STATE = "No Todos"

test.beforeEach(async ({toDoPage}) => {
    await toDoPage.openToDoPage()
})

test("Check that Page Title is correct", async ({toDoPage}) => {
await toDoPage.checkPageTitle(PAGE_TITLE)
})

test("Check that default app state is empty", async ({appContentPage}) => {
    await appContentPage.checkAppEmptyStateHasText(EMPTY_STATE)
})