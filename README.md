# Web Banners Repository
This repository contains a collection of web banners designed to display various types of information on a website. Currently, there are three banners: the Outage Banner, the Weather Banner, and the Simple Weather Banner. Each banner is designed to provide users with specific information in a clear and visually appealing format.

## Outage Banner
The Outage Banner is a dynamic web component that displays information about system outages. It is designed to provide users with real-time updates and alerts about any disruptions to the service. The banner can be expanded to reveal recent alerts and additional information, such as links to an AI support center and outage reporting pages.You can see it implemented [here](https://www.phonoscopefiber.com/outage).

![Screenshot of Outage Banner with all menus expanded](/screenshots/screenshot-outages.png)

### How It Works
The Outage Banner utilizes JavaScript to populate the banner content dynamically. It includes a default notice and a section for recent updates. The banner initially displays a summary of the outage status, and users can click on it to reveal more detailed information.

### Customization
To customize the Outage Banner for your specific use case:
* Modify the outageStatus, defaultNotice, and updates variables to include your own text and timestamps.
* Update the styles in the HTML file to match your website's design and branding.
* Adjust the links in the "Footer Links" section to point to your relevant pages.

## Weather Banner
The Weather Banner is a dynamic web component that displays current weather information and an extended forecast. It utilizes the National Weather Service API to fetch weather data based on a specific location. You can see it implemented [here](https://www.phonoscopefiber.com/hurricane).

![Screenshot of Weather Banner with menu expanded](/screenshots/screenshot-weather.png)

### How It Works
The Weather Banner uses JavaScript to fetch initial point data from the API, which includes the forecast and grid data URLs. It then extracts the necessary parameters to fetch the short-term forecast and extended forecast data. The banner displays the current weather alert, high and low temperatures, and provides a clickable option to view the extended forecast.

#### Customization
To customize the Weather Banner:
* Modify the API URL in the fetch function to target a different location or data source.
* Adjust the styling in the HTML file to match your website's design.
* Customize the forecast period and the number of periods displayed in the extended forecast by modifying the periods array.

## Simple Weather Banner
The Simple Weather Banner is a basic version of the Weather Banner that displays a single weather alert. It is designed to be a lightweight and straightforward implementation.

![Screenshot of simple Weather Banner](/screenshots/screenshot-weather-simple.png)

### How It Works
The Simple Weather Banner uses HTML, CSS, and JavaScript to fetch weather data from the National Weather Service API and populate the banner content. It displays a single alert about the current weather conditions.

### Customization
To customize the Simple Weather Banner:
* Modify the API URL in the fetch function to target a different location.
* Adjust the styling in the CSS file to match your website's design.

## Contributing
Contributions are welcome!
