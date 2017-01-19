(function () {
  const interfaceRouter = angular.module('app', []);
  interfaceRouter.component('postForm', {
    controller: function appController() {
      const vm = this;
      vm.toggle = true;
      vm.filter = '';
      vm.sortBy = '-voteRating';
      vm.$onInit = () => {
        vm.posts = [{
          title: 'davai',
          body: 'cyka blyat idi nahui axaxaxaxax',
          author: 'ivan',
          imageUrl: 'https://images.pexels.com/photos/141707/pexels-photo-141707.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
          voteRating: 5,
          date: Date.now(),
        }, {
          title: '7-1',
          body: '7-1 lamo',
          author: 'germanbro',
          imageUrl: 'http://i1.nyt.com/images/2014/07/09/sports/08bg7/08bg7-master675.jpg',
          voteRating: 71,
          date: Date.now(),
        }];
      };

      vm.addPost = function addPost() {
        vm.post.date = Date.now();
        vm.post.voteRating = 0;
        vm.posts.push(vm.post);
        delete vm.post;
        vm.toggle = true;
      };

      vm.removePost = function removeItem(e, item) {
        e.preventDefault();
        vm.items.splice(vm.items.indexOf(item), 1);
      };

      vm.upVote = function upVote(e, post) {
        const toPost = post;
        e.preventDefault();
        toPost.voteRating += 1;
      };

      vm.downVote = function downVote(e, post) {
        const toPost = post;
        e.preventDefault();
        if (post.voteRating > 0) {
          toPost.voteRating -= 1;
        }
      };

      vm.addComment = function addComment(e, post) {
        const toPost = post;
        if (!toPost.comments) {
          toPost.comments = [];
        }
        toPost.comments.push(post.comment);
        delete toPost.comment;
      };
    },
    templateUrl: './postForm.html',
  });
}());
