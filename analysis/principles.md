# UX Case Study - Music Streaming
UI/UX Principles Outline

We’ve challenged ourselves to analyze the design and UX of music streaming applications and create a set of design principles that describe best practices when designing an application in a domain as such.

## Goals
- Develop a system for creating experiences within a musical application
- Provide clarity to the user when interacting with application interfaces

## Principles
### Skeuomorphic Physics
	- Learn more about physics
	- [Easing](http://greensock.com/docs/#/HTML5/GSAP/Easing/)
	- Authentic Object Motion
	- [Physics](http://iamralpht.github.io/physics/)
	- **Elevation**
The relative position of an object on it’s z-axis. The value between parent and child.

### Graphic Intention
	- **Lighting**
	- **Shadows**
This is very important for creating realistic effects in movement
	- **Texture**
Does adding content create texture? - (Material doesn’t allow texture to be created, it just apples content)
Explore adding multiple layers of content to a single object
	- **Physical Properties** - (Material has a uniform thickness of 1dp, we should explore breaking this and allow objects to have multiple thicknesses)
Material cannot occupy the same point in space across material objects
	- **Shape**
Does the object change shape? - (Material let’s you change shape)
Does it bend or flip? - (Material does not let you do this)
	- **Structure**
Apps are built for a variety of reasons. The structure will depend on the content and tasks you want to surface for your users.
		- Apps that focus on a single activity handled from a single screen
		- Apps that switch between activities without deeper navigation
		- Apps that combine a broad set of data views with deep navigation
	- Avoid navigation-only screens and instead let people get to the core experience of your app, making content the center of the experience
	- Direct user’s focus with most important destinations and actions
	- Use tabs if you expect user’s will switch views frequently
	- Determine top-level views
	- **Discrete Properties**


### Environment and Object Organization
Organizing an object in a space depends largely on it’s parent-child relationship and how it should move in a space.

### Responsive Interaction
  - Giving user affordances
	- Consistent responses
	- **Content Behavior**
How does content behave in comparison to it’s environment? - (Material allows content to move completely independently of it’s the environment —> Material)
	- Stateful Feedback (Pre, Roll, Post)
Does it provide clarity to the user in regards to the object’s physical properties? - (Material makes it very clear that the z-axis changes when a shadow is increased upon interaction)
Does it break or merge with other objects? - (Material let’s you break and merge with other objects)
How is it created? - (Material can be generated spontaneously anywhere in the environment)
How does the details of the app change?
What is the epicenter? *The place or places where the intent enters the system*. (For touch it’s the touch point, voice the mic icon)
How does it react from z-axis motion? - (Material will provide feedback with one or many indicators)
Primary, Secondary actions
How do they respond during different states?
Enter, Exit, Move
	- **Mouse**
		- mouseenter
		- mouseleave
		- contextmenu
	- **Touch**
		- touchstart
		- touchenter
		- touchmove
		- touchend
	- focus
	- blur
	- devicemotion
	- scroll
	- voice

### Animation
Animation is about building meaning in terms of spacial relationships, functionality, and intention.
    - Depth
    - Reaction
		- User input
			- First class input methods
[](http://www.google.com/design/spec/animation/authentic-motion.html#authentic-motion-mass-weight)
		- Choreographed motion design
			- Incoming Elements - items that need to be introduced into the scene
			- Outgoing Elements - items that are no longer relevant to the scene
			- Shared Elements - items that persist from beginning to end of the transition
How should the user’s attention be directed? What goals support that goal? How should incoming, outgoing, and shared elements be emphasized and de-emphasized through the transition?
		- Create meaning when building transitions.
		- Use hierarchical motion to direct the user’s attention
		- Haphazard motion is distracting

### Emotional Response
	- Bad
  - Good

### Physics Data Models

### TODO’s
	- Capture new Physics findings 
	- Interaction with touch screen
  - Other sources for inspiration
	- Schedule coffee session to build some assets
  - Branch out with selection of resources
  - Formalize an action plan