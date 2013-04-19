/*
 * qWikiOffice Desktop 1.0
 * Copyright(c) 2007-2010, Murdock Technologies, Inc.
 * licensing@qwikioffice.com
 *
 * http://www.qwikioffice.com/license
 */

Ext.namespace('Ext.ux','QoDesk');

QoDesk.App = new Ext.app.App({
   init : function(){
      Ext.BLANK_IMAGE_URL = 'resources/images/default/s.gif';
      Ext.QuickTips.init();
   },

   /**
    * The member's name and group name for this session.
    */
   memberInfo: {
      name: 'Todd Murdock',
      group: 'System Administrator'
   },

   /**
    * An array of the module definitions.
    * The definitions are used until the module is loaded on demand.
    */
   modules: [    				
				{
					"id":"demo-tab",
					"type":"demo/tab",
					"url":"http://haries.id.or.id/",
					"title":"Haries or ID",
					"className":"QoDesk.BogusWindow",
					"launcher":
					{
						"iconCls":"bogus-icon",
						//"shortcutIconCls":"demo-bogus-shortcut",
						"text":"Bogus Windowxxxx",
						"tooltip":"<b>Bogus Window<\/b><br \/>A bogus window"
					},
					"launcherPaths":
					{
						"startmenu":"\/Bogus Menu\/Bogus Sub Menu"
					}
				},
				{
					"id":"demo-grid",
					"type":"demo/grid",
					"url":"http://commerce.jcamp.biz/nanang",
					"title":"Komers",
					"className":"QoDesk.BogusWindow",
					"launcher":
					{
						"iconCls":"grid-icon",
						"shortcutIconCls":"demo-grid-shortcut",
						"text":"Grid Window",
						"tooltip":"<b>Grid Window<\/b><br \/>A grid window"
					},
					"launcherPaths":
					{
						"startmenu":"\/"
					}
				},
				
			],

   /**
     * The members privileges.
     */
   /*privileges: {"demo-accordion":[],"demo-bogus":[],"demo-grid":[],"demo-layout":[],"demo-tab":[],"qo-admin":["addGroup","addMember","addPrivilege","approveSignupsToGroup","deleteGroup","deleteMember","deletePrivilege","denySignups","editGroup","editGroupPrivilege","editMember","editMembersGroups","editPrivilege","editPrivilegeModules","viewGroups","viewGroupPrivileges","viewMembers","viewMemberGroups","viewPrivileges","viewPrivilegeModules","viewSignups"],"qo-mail":["loadMemberFolders","addMemberFolder"],"qo-preferences":["saveAppearance","saveAutorun","saveBackground","saveQuickstart","saveShortcut","viewThemes","viewWallpapers"],"qo-profile":["loadProfile","saveProfile","savePwd"]},
*/
   /**
    * The desktop config object.
    */
   desktopConfig: {
      appearance: {"fontColor":"333333","taskbarTransparency":100,"theme":{"id":1,"name":"Blue","file":"resources\/css\/xtheme-blue.css"}},
      background: {"color":"f9f9f9","wallpaperPosition":"center","wallpaper":{"id":11,"name":"qWikiOffice","file":"resources\/wallpapers\/qwikioffice.jpg"}},
      launchers: {"shortcut":["qo-preferences","qo-admin","demo-accordion","demo-tab","demo-bogus","demo-grid"],"quickstart":[]},
      taskbarConfig: {
         buttonScale: 'large',
         position: 'bottom',
         quickstartConfig: {
            width: 120
         },
         startButtonConfig: {
            iconCls: 'icon-qwikioffice',
            text: 'Start'
         },
         startMenuConfig: {
            iconCls: 'icon-user-48',
            title: 'Todd Murdock',
            width: 320
         }
      }
   }
});