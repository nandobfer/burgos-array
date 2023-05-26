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