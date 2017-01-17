(function() {
    'use strict'

    angular.module('app', [])
        .component('postForm', {
            controller: function appController() {
                const vm = this
                vm.toggle = true;
                vm.filter = '';
                vm.sortBy = '-voteRating';
                vm.$onInit = function() {
                    vm.posts = [{
                        title: 'davai',
                        body: 'cyka blyat idi nahui axaxaxaxax',
                        author: 'ivan',
                        imageUrl: 'https://images.pexels.com/photos/141707/pexels-photo-141707.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
                        voteRating: 5,
                        date: Date.now()
                    }, {
                        title: "7-1 ;)",
                        body: '7-1 lamo',
                        author: 'germanbro',
                        imageUrl: 'http://i1.nyt.com/images/2014/07/09/sports/08bg7/08bg7-master675.jpg',
                        voteRating: 71,
                        date: Date.now()
                    }]
                }

                vm.addPost = function addPost() {
                    vm.post.date = Date.now();
                    vm.post.voteRating = 0;
                    vm.posts.push(vm.post);
                    delete vm.post
                    vm.toggle = true
                }

                vm.removePost = function removeItem(e, item) {
                    e.preventDefault();
                    vm.items.splice(vm.items.indexOf(item), 1);
                }

                vm.upVote = function upVote(e, post) {
                    e.preventDefault();
                    post.voteRating++;
                }

                vm.downVote = function downVote(e, post) {
                    e.preventDefault();
                    if (post.voteRating > 0) {
                        post.voteRating--;
                    }
                }

                vm.addComment = function addComment(e, post) {
                    if (!post.comments) {
                        post.comments = [];
                    }
                    post.comments.push(post.comment)
                    delete post.comment
                }
            },
            templateUrl: './postForm.html'
        })


}());
