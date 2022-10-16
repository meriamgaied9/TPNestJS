import { BehaviorSubject, map, Observable, of, Subject } from "rxjs";

const observable = new Observable(
    (observer) => {
        let i = 5;
        setInterval(() => {
            if (!i) {
                observer.complete();

            }
            observer.next(i--);

        }, 1000);
    }
)

const subject = new BehaviorSubject("f"
)

subject.next("!")

subject.subscribe(
    a => console.log(a)
)
observable.subscribe(
    (val) => {
        console.log(val);
    }
)

const myObservale = of(1,2,3)


const mappedObservable = myObservale.pipe(map(x=>x*2))
mappedObservable.subscribe(
    x => console.log(x)
)

