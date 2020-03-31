6. Imagine Array() doesn't exist and the array literal notation doesn't exist either. Create a constructor called MyArray() that behaves as close to Array() as possible. Test with this code:

> > > var a = new MyArray(1,2,3,"test"); >>> a.toString();

> > > "1,2,3,test"

> > > a.length;

> > > 4

> > > a[a.length - 1]

> > > "test"

> > > a.push('boo');

> > > 5

> > > a.toString();

> > > "1,2,3,test,boo"

> > > a.pop();

> > > [1, 2, 3, "test"]

> > > a.toString();

> > > "1,2,3,test"

> > > a.join(',')

> > > "1,2,3,test"

> > > a.join(' isn\'t ')

> > > "1 isn't 2 isn't 3 isn't test"
