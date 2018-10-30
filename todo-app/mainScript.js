angular.module("mainApp",[

])
.controller("mainCtrl", function($scope){
    $scope.helloNew = "world with Controller"

    $scope.bookmarks = [
        {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ]
    $scope.currCategory = null;
    function setCurrCategory(category){
        $scope.currCategory = category;
    }
    function isCurrCategory(category){
        return category != null && category.name == $scope.currCategory.name;
    }
    $scope.setCurrCategory = setCurrCategory;
    $scope.isCurrCategory = isCurrCategory;

    //creating and editing states
    $scope.isCreating = false;
    $scope.isEditing = false;
    function startCreating(){
        $scope.isCreating = true;
        $scope.isEditing = false;
        resetCreateForm();
    }
    function cancelCreating(){
        $scope.isCreating = false;
    }
    function startEditing(){
        $scope.isCreating = false;
        $scope.isEditing = true;
    }
    function cancelEditing(){
        $scope.isEditing = false;
    }
    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;

    function shouldShowCreating(){
        return $scope.currCategory && !$scope.isEditing;
    }
    function shouldShowEditing(){
        return $scope.isEditing && !$scope.isCreating;
    }
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;

    //crud
    function resetCreateForm(){
        $scope.newBookmark = {
            title: "",
            url: "",
            category: $scope.currCategory.name
        }
    }
    function createBookmark(bookmark){
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);
        resetCreateForm();
    }
    $scope.createBookmark = createBookmark;

    $scope.editBookmark = null;
    function setEditedBookmark(bookmark){
        $scope.editedBookmark = angular.copy(bookmark);
    }
    function updateBookmark(bookmark){
        var index = _.findIndex($scope.bookmarks, function(b){
            return b.id == bookmark.id;
        });
        $scope.bookmarks[index] = bookmark;

        $scope.editedBookmark = null;
        $scope.isEditing = false;
    }
    $scope.setEditedBookmark = setEditedBookmark;
    $scope.updateBookmark = updateBookmark;

    function deleteBookmark(bookmark){
        _.remove($scope.bookmarks, function(b){
            return b.id == bookmark.id;
        });
    }
    $scope.deleteBookmark = deleteBookmark;
})