# Architecture

This file explains the physical underyling structure of the project

## Environments (`/environments`)

In here, you should place (non-sensitive) environment information. Sensitive information can be provided via environment variables in the build chain

## Source-Files (`/src`)

Main project specific files, which can be divided into the following technical categories:

#### Components (`/src/components`)

Contains all UI Components. This includes components of any complexity.
This folder is structured on a feature-first basis, which is a more scalable architecture approach for medium to large applications.

##### Explanation of the Directory structure within feature folders

An inherent "problem" with React is that pretty much everything is a component. It is therefore smart to introduce some sort of grouping within the components folder.

In this project, we put Screens/Pages in a special subfolder inside the the accompanying feature folder.

- Pages/**Screens** ✓ (`components/<feature>/__screens__/<component-name>`, screens in adesso mobile terminology)

##### Structure inside component folder (for example, `/src/components/common/Paragraph`)

- <component-name>.tsx - Contains component logic
- <component-name>.test.tsx - Contains unit test, written in jest. (See testing section in [README.md](README.md))
- (_<component-name>.style.tsx - Possible option to adopt all stylings in a separate file, right now not used. Through the course of the project we will see if the components require enough styling to warrent the addition of this file-type_)

#### Constants (`/src/constants`)

Constant declarations that should be globally available.

#### Custom Hooks (`/src/hooks`)

Contains all the custom hooks used throughout the project. See the [React documentation on Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
for more information.

It may be necessary to divide this folder into feature-specific sub-folders at a later stage.

#### Models (`/src/models`)

Model used by separate features/categories throughout the project. For example, models of the api will be used by the UI/Components as well as an the Redux-Store.

#### Navigation (`/src/navigation`)

The app makes heavy use of react-navigation to accommodate navigation and type-checking.
This ensures that at a later time deep-linking can be easily introduced.

The general structure of the navigation can be depicted as follows:

```
|-- RootNavigator (StackNavigator)
    |-- BottomTabNavigator (BottomTabsNavigator)
        |-- TabOneNavigator (StackNavigator)
            |-- TabOneScreen
            |-- ...
        |-- TabTwoNavigator (StackNavigator)
            |-- TabTwoScreen
            |-- ...
    |-- NotFound
        |-- ...
```

For more information on the types of navigators, please see the [documentation available](https://reactnavigation.org/docs/nesting-navigators).
Do also take note of the new navigation Hook: https://reactnavigation.org/docs/connecting-navigation-prop/
