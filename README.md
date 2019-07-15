
# nj-components
My collection of custom component on vue js

## Installation

Using tag script. For example you want to use nj-dropdown-list

```bash
<script src="nj-dropdown-list.js"></script>
```

## Usage
  
```html

<nj-dropdown-list></nj-dropdown-list>

  ```
  
## API

### nj-dropdown-list

#### Properties

The available properties for nj-dropdown-list. All option is required and should passed.

##### items :array of object

The collection data for looping the selection.

vue js code
```js
{
  data : {
    persons : [
        {
          name : 'lorem',
          age : 12,
          address : 'jakarta barat'
        },
        {
          name : 'ipsum dolor',
          age : 23,
          address : 'california'
        },
        {
          name : 'sit amet',
          age : 18,
          address : 'perth'
        }
     ]
   }
}

```
html template
```html
  <nj-dropdown-list items="data"></nj-dropdown-list>
```

#### text : string | closure

Text to display on repeating items. You can specify field you want to display.

Let see the example.

Or you can custom with closure. 
```js
function displayPerson(person){
    return person.name + '-' + person.age;
}
```

and then you pass to props like this.

html template
```html
  <nj-dropdown-list items="data" v-bind:text="displayPerson"></nj-dropdown-list>
```

#### onFilter : string | array | closure

You can filter item by field you want. The default is using includes built in function and you can specify with string. 

See example below. Filter collection by name.

Using string
```html
<nj-dropdown-list items="data" v-bind:text="displayPerson" on-filter="name"></nj-dropdown-list>
```

You can pass with coma "," on string if you want filter more than one field (contains). 
```
<nj-dropdown-list items="data" v-bind:text="displayPerson" on-filter="name,address"></nj-dropdown-list>
``


If you want to custom the filter you can use closure.

Let see example below. Filtering person aged more than 20 years old.
```js
function filterByAge(person){
    return person.age > 20;
}
```

and then you pass to props like this.

html template
```html
  <nj-dropdown-list items="data" v-bind:text="displayPerson" v-bind:on-filter="filterByAge"></nj-dropdown-list>
```
  
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
