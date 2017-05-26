# JS Project Mode

We're going to build a JavaScript project! This will be a fun learning experience and a chance to get better at your vanilla JS before we start looking at frameworks. 

As you come up with a project idea, keep in mind that you won't have a front-end framework to support you. You will have to develop the structure of the application yourself. This will likely make building out each feature more challenging, but you guys are awesome and can do it. Remember to build iteratively. 

### Requirements

1. Must be a HTML/CSS/JS front-end with a Rails API backend. These should live in two separate repositories. 
2. Must render out one resource. For example, if we were building Instagram, we might display a list of photos that we get from the API. 
3. Must use your Rails API and a form to create a resource and render the response without a page refresh. For example, if you create a new Photo post, and form data would be serialized, and submitted via an AJAX POST request, with the response being the new object in JSON and then appending that new comment to the DOM using JavaScript (ES6 Template Literals, can help out a lot with this).
4. The Rails API must reveal at least one has-many relationship in the JSON that is then rendered to the page. For example if each of those photos has many comments, you could render those comments as well on that show page.
5. You **may not** use authentication or authorization. This means no user log in. We'll look at patterns for dealing with client-side auth later in the semester, so you'll have plenty of time to deal with this case. 

