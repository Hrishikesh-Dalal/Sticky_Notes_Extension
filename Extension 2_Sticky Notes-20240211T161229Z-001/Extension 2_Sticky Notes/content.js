const img = ["https://media.istockphoto.com/id/1206799011/photo/close-up-purple-flower-growing-on-crack-street-background.jpg?s=612x612&w=0&k=20&c=DsOH4yn71JwJYkLcMKRhalcRnHzdrpgMdbrclczeP6M="];

// The const keyword has all the properties that are the same as the let keyword, except the user cannot update it. Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error
const imgs = document.getElementsByTagName("img");
for(let i = 0; i<imgs.length;i++){
    //imgs[i].src = img[0];
}