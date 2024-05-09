# burgos-array
#### A hook with custom array methods

### Methods

##### newArray
a method that returns an array with specified length and initialized in numeric order

```jsx
import { useArray } from 'burgos-snackbar'

export const App = () => {
    const { newArray } = useArray()
    const five_items = newArray(5)

    console.log(five_items) ## [1, 2, 3, 4, 5]
}
```

##### chunkArray
a method that returns multiple arrays with specified max length given an inputed array

```jsx
import { useArray } from 'burgos-snackbar'

export const App = () => {
    const { chunkArray } = useArray()
    const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const chunkedArray = chunkArray(originalArray, 4)

    console.log(chunkedArray) ## [[1, 2, 3, 4] , [5, 6, 7, 8], [9]]
}
```