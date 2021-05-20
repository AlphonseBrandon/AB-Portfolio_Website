// ! BLOG POST
const database = firebase.database();
console.log(database);
const blogPost = function () {
  // ? create blog elements
  const article = document.createElement("article");
  article.classList.add("blog-post");
  // -------------heading------------------
  const div_1 = document.createElement("div");
  article.appendChild(div_1);
  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "#"; //todo input blog heading
  div_1.appendChild(h1);
  // ---------------img--------------
  const div_2 = document.createElement("div");
  article.appendChild(div_2);
  const img = document.createElement("img");
  img.src = ""; //todo input image source
  div_2.appendChild(img);
  // --------------text-aticle----------
  const div_3 = document.createElement("div");
  article.appendChild(div_3);
  const p_text = document.createElement("p");
  p_text.classList.add("text-article");
  p_text.textContent = "#"; //todo input blog text
  div_3.appendChild(p_text);
  // ---------read more button
  const readMore = document.createElement("button");
  readMore.classList.add("read-more");
  readMore.textContent = "... read more";
  p_text.appendChild(readMore);
  // --------------article-footer----------
  const articleFooter = document.createElement("div");
  articleFooter.classList.add("article-footer");
  article.appendChild(articleFooter);
  //-----------flex left
  const flexLeft = document.createElement("div");
  flexLeft.classList.add("flex-left");
  articleFooter.appendChild(flexLeft);
  // * add more functinality to the like button
  const likeButton = document.createElement("button");
  likeButton.classList.add("like");
  flexLeft.appendChild(likeButton);
  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fas");
  likeIcon.classList.add("fa-thumbs-up");
  likeButton.appendChild(likeIcon);
  const likeButtonText = document.createElement("span");
  likeButtonText.classList.add("button-text");
  likeButtonText.textContent = " Like";
  likeButton.appendChild(likeButtonText);
  //* add more functionality to the count element
  const likeButtonCount = document.createElement("span");
  likeButtonCount.setAttribute("id", "count");
  likeButtonCount.textContent = " #";
  likeButton.appendChild(likeButtonCount);
  // * add more functinality to the comment button
  const commentButton = document.createElement("button");
  commentButton.classList.add("comment");
  flexLeft.appendChild(commentButton);
  const commentIcon = document.createElement("i");
  commentIcon.classList.add("fas");
  commentIcon.classList.add("fa-comment");
  commentButton.appendChild(commentIcon);
  const commentButtonText = document.createElement("span");
  commentButtonText.classList.add("button-text");
  commentButtonText.textContent = " comment";
  commentButton.appendChild(commentButtonText);
  //* add more functionality to the count element
  const commentButtonCount = document.createElement("span");
  commentButtonCount.setAttribute("id", "count");
  commentButtonCount.textContent = " #";
  commentButton.appendChild(commentButtonCount);
  //-----------flex right
  const flexRight = document.createElement("div");
  flexRight.classList.add("flex-right");
  articleFooter.appendChild(flexRight);
  const category = document.createElement("div");
  category.classList.add("category");
  flexRight.appendChild(category);
  const categoryButton = document.createElement("button");
  category.appendChild(categoryButton);
  const tagIcon = document.createElement("i");
  tagIcon.classList.add("fas");
  tagIcon.classList.add("fa-tag");
  categoryButton.appendChild(tagIcon);
  const categoryTitle = document.createElement("span");
  categoryTitle.textContent = " Category";
  categoryButton.appendChild(categoryTitle);
  const categoryInput = document.createElement("p");
  categoryInput.textContent = "#"; //todo add category type here
  category.appendChild(categoryInput);
  const post = document.createElement("div");
  post.classList.add("postDate");
  flexRight.appendChild(post);
  const postButton = document.createElement("button");
  post.appendChild(postButton);
  const clockIcon = document.createElement("i");
  clockIcon.classList.add("fas");
  clockIcon.classList.add("fa-clock");
  postButton.appendChild(clockIcon);
  const postTitle = document.createElement("span");
  postTitle.textContent = " Posted On";
  postButton.appendChild(postTitle);
  const postInput = document.createElement("p");
  postInput.textContent = "#"; //todo add post date here
  post.appendChild(postInput);
  const author = document.createElement("div");
  author.classList.add("author");
  flexRight.appendChild(author);
  const authorButton = document.createElement("button");
  author.appendChild(authorButton);
  const userIcon = document.createElement("i");
  userIcon.classList.add("fas");
  userIcon.classList.add("fa-user");
  authorButton.appendChild(userIcon);
  const authorTitle = document.createElement("span");
  authorTitle.textContent = " author";
  authorButton.appendChild(authorTitle);
  const authorInput = document.createElement("p");
  authorInput.textContent = "#"; //todo add author here
  author.appendChild(authorInput);
  // ? select  and append blog-article to the DOM
  const blogElement = document.querySelector(".blog-grid");
  blogElement.appendChild(article);

  return article;
};
blogPost();
