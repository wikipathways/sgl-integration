$(document).ready(function() {
  if (!!window.SGL) {
    var editorOpenState = false;
    var annotationElement = $('.annotation.ui-draggable');
    $('#pvjs-container').bind('DOMSubtreeModified', function(e) {
      var updatedEditorOpenState = annotationElement.hasClass('editor-open');
      if (editorOpenState && !updatedEditorOpenState) {
        console.log('Sending update to SGL');
        var activity_body = {
          _t: 'activity.create',
          accounttoken: 'userTokenGoesHere',
          details: { gameId: '5751ed90e4b050b536ba7a03' },
          activity: 'basicquickedit',
          time: (new Date()).toTimeString()
        };
        window.SGL.create_activity(activity_body, function(response) {
          console.log('SGL response');
          console.log(response);
        });
      }
      editorOpenState = updatedEditorOpenState;
    });
  }
});
