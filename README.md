# Money Saver

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 📖 Api

In the API folder, I keep my API routes and API calls. Also, I create a generic request function with Axios. Which can be reused for API-requests.

### 🖼️ Assets

In the assets folders, I have three subfolders. Firstly, the CSS folder where I keep all my in-js-CSS files. Secondly, the images folder and I think this folder speaks for itself. Lastly, the theme folder and the theme folder is for Material-UI.

### 🧱 Components

Furthermore, we have the famous components folder. Re-usable functions will be put in the components folder and it can be used by functional components in the views folder.

### ☂️ Hooks

The hooks folder is cool but mostly unused. I rarely make custom hooks, but I still keep the folder there in case I have some genius idea that needs to be a hook.

### 🗺️ Routes

In the routes folder, I keep my routes! I think the only 'weird' thing I do in my routes folder is using suspense. I am using suspense to split the code of the views.

### ⌨️ Types

So, as you know I am using Typescript. Therefore I have a folder called types where I can put in my Typescript types and interfaces. Props types are the only exemption. They get declared above the components themself.

### 🔨 Utils

I always create a lot of functions within a component. As a result, the component can become quite bloated. When I feel that is happening I will move the functions within the utils folder. Also, if a function is used by some other component then it is also going to the utils folder.
