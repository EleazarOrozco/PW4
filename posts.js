import { posts } from "./data";
class Posts{
    constructor(){
        this.data = [posts];
    }
    
    searchById = (id) => {
      const result = this.data.find((user) => user.id === id);
      if (result) {
        console.log(result);
        return result;
      } else {
        console.log(`No se encontró un usuario con el id ${id}`);
        return null;
      }
    };
  
    searchByPostId = (postId) => {
      const result = this.data.filter((user) =>
        user.posts.some((post) => post.id === postId)
      );
      if (result.length > 0) {
        console.log(result);
        return result;
      } else {
        console.log(`No se encontró ningún post con el id ${postId}`);
        return null;
      }
    };
  }

const user = new Posts(usuarios);

const searchByIdBtn = document.getElementById("searchByIdBtn");
searchByIdBtn.addEventListener("click", () => {
  const id = document.getElementById("idInput").value;
  user.searchById(id);
});

const searchByPostIdBtn = document.getElementById("searchByPostIdBtn");
searchByPostIdBtn.addEventListener("click", () => {
  const postId = document.getElementById("postIdInput").value;
  user.searchByPostId(postId);
});



