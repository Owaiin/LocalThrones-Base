# LocalThrones - Base
LocalThrones is a Manchester based service for promoting local venues, focusing on home-grown local industry. You can find more about it [here](https://www.instagram.com/localthronesmcr/?hl=en-gb)

The project consists of two frontends, one for everyday users and another for businesses.

Customers will be able to login using OAuth providers (just Google at the moment) and will be able to access deals and offers that are made within the Business frontend.

Customers use a QR code from the deal page, which when scanned from a Business login, will check that the QR code is valid and then add that to a count of usage for the business to track how many times a deal has been used. Each deal will have a series of pre-defined attributes to help further define the type of interests the users of the deal have. For example: Cocktails, Pizza, American. This will then help Businesses to create further deals or help them with social media ad campaign target audiences.

## TechStack
NextJS, TailwindCSS, DaisyUI, NextAuth/AuthJS, Prisma, PlanetScale

NextAuth, Prisma, and PlanetScale are all hooked-up and working

## Images - (As I've not finished setting up the business side, the deals are all the same at the moment)
### Home Screen/Select Deal

<img width="200" alt="HomeScreen" src="https://user-images.githubusercontent.com/20094176/226694722-aa7a8d45-4df0-4639-8d51-c46fae159829.png">

### Deal Screen - Info, Maps, and Like button are all working - MapsAPI not yet implemented but pops up a component where maps component will be

<img width="200" alt="DealScreen" src="https://user-images.githubusercontent.com/20094176/226695084-d4dc6ccf-f23a-4377-8932-f8d91488d993.png">

### QRScreen - Where a generated QRCode Component lives - QRCode updates every 30 seconds with a new Date in the value object

<img width="200" alt="QRCodeScreen" src="https://user-images.githubusercontent.com/20094176/226695307-aea058c6-575b-4202-8ca4-c4ff84942590.png">
