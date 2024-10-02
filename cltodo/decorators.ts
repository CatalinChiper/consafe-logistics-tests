import { test as base } from "@playwright/test"
import { ToDoPage } from "./main/pages/toDoPage"
import { ModalDialog } from "./main/pages/modalDialog"
import { AppContent } from "./main/pages/appContent"
import { ToDoItem } from "./main/pages/toDoItem"

/**
 * Step Decorator function for increasing step readability in debug and test reports
 */
export function Step(stepName?: string) {
    return function decorator(target: Function, context: ClassMethodDecoratorContext) {
        return function replacementMethod(...args: any) {
            const name = stepName || `${this.constructor.name}.${(context.name as string)}`
            return test.step(name, async() => {
                return await target.call(this, ...args)
            })
        }
    }
}

/**
 * Random string generator
 */
export function generateRandomString(stringLength: number) {
    return Math.random().toString(36).substring(0, stringLength);
}

/**
 * Fixtures for declaration of pages from POM files
 * 
 * This approach helps with test readability even if it looks like over-engineering
 * 
 * This approach is designed for scalable apps
 */
type PageFixtures = {
    toDoPage: ToDoPage
    modalPage: ModalDialog
    appContentPage: AppContent
    toDoItem: ToDoItem
}

export const test = base.extend<PageFixtures>({
    toDoPage: async ({ page }, use) => {
        await use(new ToDoPage(page))
    },
    modalPage: async({ page }, use) => {
        await use(new ModalDialog(page))
    },
    appContentPage: async({ page }, use) => {
        await use(new AppContent(page))
    },
    toDoItem: async({ page }, use) => {
        await use (new ToDoItem(page))
    }
    
})