const posts = [];

function displayPosts() {
  const postFeed = document.getElementById('post-feed');
  postFeed.innerHTML = "";

  let visiblePosts = [...posts];
  const query = document.getElementById('search-bar').value.toLowerCase().trim();

  if (query) {
    visiblePosts = visiblePosts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  }

  const sortType = document.getElementById('sort-options').value;
  visiblePosts.sort((a, b) => {
    if (sortType === "latest") return b.created - a.created;
    if (sortType === "oldest") return a.created - b.created;
    if (sortType === "title") return a.title.localeCompare(b.title);
    if (sortType === "author") return a.author.localeCompare(b.author);
    return 0;
  });

  if (visiblePosts.length === 0) {
    postFeed.innerHTML = `<p class="empty-msg">No posts available.</p>`;
    return;
  }

  visiblePosts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <div class="card-header">
        <span class="post-title">${post.title}</span>
        <span class="post-time"> • ${post.created.toLocaleString()}</span>
      </div>
      <div class="post-author">By ${post.author}</div>
      <div class="post-summary">${post.summary}</div>
      <div class="post-body">${post.content.replace(/\n/g, "<br/>")}</div>
    `;
    postFeed.appendChild(card);
  });
}

document.getElementById('post-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const author = document.getElementById('post-author').value.trim();
  const summary = document.getElementById('post-summary').value.trim();
  const content = document.getElementById('post-content').value.trim();

  if (!title || !author || !summary || !content) {
    alert("Fill in all fields.");
    return;
  }

  posts.push({
    title,
    author,
    summary,
    content,
    created: new Date()
  });

  this.reset();
  displayPosts();
});

document.getElementById('search-bar').addEventListener('input', displayPosts);
document.getElementById('sort-options').addEventListener('change', displayPosts);
window.addEventListener('DOMContentLoaded', displayPosts);
