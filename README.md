# nodejs-gq
gq is a little termainal wrapper base on reqiure('google') to make google search query´s in your termainal.

#Install gq global
```
$ npm install -g gq
```

**Now you run a google search with:  ``` gq '<SEARCH-STRING>' ```

#Limit search
```
$ gq '<SEARCH-STRING>' 1 
```

*This will return something like below:*

```
-----------------

>> Q + limit-1 >> Car . . .

[1]-> New Cars, Used Cars, Car Reviews | Cars.com
http://www.cars.com/
Use Cars.com to search more than 4 million new & used car listings or get a 
dealer quote. Our easy-to-use online tools put you a step ahead in your next 
vehicle ...
---

>> GoogleQuery return 1 resluts!

Did you mean: carmax,cards against humanity,cartoon network,care credit,carnival cruise,cargurus,carters,cars,cars for sale,carrie underwood.?

$
```