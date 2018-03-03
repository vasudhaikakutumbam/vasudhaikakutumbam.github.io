import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const needs = [
            {
                name: 'Education',
                description: "Education is the key to the progress of the society and the tool to make the world a better place.",
                details: "There are a lot of children in our own neighbourhood who cannot go to school or pay their exam fees. You can help us find them. Our goal is to take over their financial burden and take care of their fees for atleast a year to the extent we can support them. We also provide them any guidance possible, meet and check with them frequently on their progress and make sure they continue to get a good education.",
                amount: 5000,
                amountReceived: 200,
                contact: '+919666611411',
                imageurl: 'cause-education.png'
            },
            {
                name: 'Senior',
                description: "We grew holding their hands, now we want them to hold ours.",
                details: "Everyone deserves a dignified life and we do not let our elders down. Some have support from their family while some don't. Some do not even have a family. They may might still get pensions or other funds, but we have seen that a small addition from us will make a lot a difference in their life standards. Their needs are not many, we support them lead their lives dignified, secure and healthy.",
                amount: 1000,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-senior.png'
            },
            {
                name: 'Essentials',
                description: "Everything is Something for some, Something is everything for some.",
                details: "Not everyone is fortunate enough to meet even their day to day essential needs. We support them rebuid their lives. Anything like Clothes, utensils, applicances used or new could make a difference.",
                amount: 6000,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-essentials.png'
            },
            {
                name: 'Make A Wish',
                description: "The Joy of having a wish come true is limitless, the joy of fulfilling that wish is beyond that.",
                details: "This is our dream and our Wish too. This is a voluntary event where we work with a school, orphanage or an oldage home, talk to them, collect a list all their small wishes and fulfill them. We, all the volunteers, meet them and spend sometime with them on a chosen day when we deliver the items we bought for them. These could be books, geometry boxes, new clothes, toys etc.",
                amount: 6000,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-make-a-wish.png'
            }
        ];
        return { needs };
    }
}