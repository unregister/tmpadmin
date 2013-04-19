<?php
header("Content-type: application/x-javascript");
?>
QoDesk.BogusWindow = Ext.extend(Ext.app.Module, {
   id: '<?php echo $_POST['moduleId'];?>',
   //type: 'demo/tab',
   url:'<?php echo $_POST['url'];?>',
   title: '<?php echo $_POST['title'];?>',

	createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow(this.id);
        
        if(!win){
        	var winWidth = desktop.getWinWidth() / 1.1;
			var winHeight = desktop.getWinHeight() / 1.1;
			
            win = desktop.createWindow({
                id: this.id,
                title: this.title,
                width: winWidth,
                height: winHeight,
                iconCls: 'tab-icon',
                shim: false,
                constrainHeader: true,
                layout: 'fit',
                html:'<iframe src="'+this.url+'" frameborder="0" width="100%" height="100%"></iframe>'
            });
        }
        win.show();
    }
});