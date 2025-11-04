### Bug Reporting

Scenario: When adding the "Monitor" product (OrderId = 4) to the cart, the **total price is not updated**.

**Task:** Write a bug report including:

* Title
* Environment (browser, OS, build version, site URL, etc.)
* Steps to reproduce
* Expected result
* Actual result
* Severity
* Evidence - screenshot, console log, or short textual description of proof


## Bug report example:

⚠️ I'm not sure if I missed some page where this case was present, so I gave more info than I would, in order to cover different cases. 

⚠️  The evidence part made me think that I missed something.

### Title: 
Total price not updated when adding "Monitor" product to cart
### Environment:
- Browser: Google Chrome 192.0.7444.60 (64 bit)
- Operating System: Windows 10 Pro version 22H2
- Build version: v1.1.0(dummy value)
- Site URL: https://www.example.com (dummy value)
- Screen resolution: 2560 x 1440(this can be important, because in some cases some elements are not appearing on smaller resolutions)
- Account: username/password(in case you had to create an account in order to access the site)
- Connection: WiFi/ 5G mobile data/ VPN
### Steps to reproduce:
- Navigate to https://www.example.com
- Log in as a valid user(if the site requires that)
- Navigate to Products page
- Add "Monitor" product (OrderId = 4) to cart
- Check the total price displayed in cart
### Expected result:
- Total cart price should increase by $x after "Monitor" is added.
### Actual result:
- "Monitor" is added to cart, but price is unchaned.
### Severity:
- High: this issue affects accuracy of order total and can impact payment processing
### Evidence: 
- Add 2 pictures, one before "Monitor" is added to cart, one after "Monitor" is added to cart
- Console logs, in case there is an error, for example a TypeError
- Recording video displays steps