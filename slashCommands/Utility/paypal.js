const _0x194ef0=_0x361b;(function(_0x3764c3,_0x164fe0){const _0x45eb16=_0x361b,_0x3c93f0=_0x3764c3();while(!![]){try{const _0x48bfc3=parseInt(_0x45eb16(0x201))/0x1+parseInt(_0x45eb16(0x1fb))/0x2+-parseInt(_0x45eb16(0x22c))/0x3+-parseInt(_0x45eb16(0x24c))/0x4*(-parseInt(_0x45eb16(0x210))/0x5)+-parseInt(_0x45eb16(0x216))/0x6+-parseInt(_0x45eb16(0x235))/0x7*(parseInt(_0x45eb16(0x253))/0x8)+-parseInt(_0x45eb16(0x209))/0x9;if(_0x48bfc3===_0x164fe0)break;else _0x3c93f0['push'](_0x3c93f0['shift']());}catch(_0x17b02d){_0x3c93f0['push'](_0x3c93f0['shift']());}}}(_0x4af4,0x8dd0e));const _0x528f9f=(function(){let _0xc17eb5=!![];return function(_0x3ee9e7,_0x554570){const _0x30f09b=_0xc17eb5?function(){const _0x11dbf6=_0x361b;if(_0x554570){const _0x42d928=_0x554570[_0x11dbf6(0x1fe)](_0x3ee9e7,arguments);return _0x554570=null,_0x42d928;}}:function(){};return _0xc17eb5=![],_0x30f09b;};}()),_0x177f43=_0x528f9f(this,function(){const _0x4da75c=_0x361b;return _0x177f43[_0x4da75c(0x23f)]()[_0x4da75c(0x22e)](_0x4da75c(0x226))[_0x4da75c(0x23f)]()[_0x4da75c(0x223)](_0x177f43)[_0x4da75c(0x22e)]('(((.+)+)+)+$');});_0x177f43();const {SlashCommandBuilder}=require(_0x194ef0(0x23d)),{Discord,ActionRowBuilder,ButtonBuilder,EmbedBuilder}=require(_0x194ef0(0x220)),fs=require('fs'),yaml=require(_0x194ef0(0x23b)),config=yaml['load'](fs[_0x194ef0(0x1f9)](_0x194ef0(0x1f2),_0x194ef0(0x204))),commands=yaml[_0x194ef0(0x25c)](fs[_0x194ef0(0x1f9)](_0x194ef0(0x24d),'utf8'));function _0x4af4(){const _0x352ff9=['PayPalSettings','Enabled','16891LhRZDr','CurrencySymbol','EmbedColors','price','setName','>\x0a>\x20','js-yaml','paypalInvoices','@discordjs/builders','fLmAZ','toString',')\x0a>\x20**','https://www.paypal.com/invoice/payerView/details/','setColor','setDescription','status','setURL','user','setStyle','name','paypalInvoice','addFields','has','371948yJrKNW','./commands.yml','invoice','Description','channel','addStringOption','>\x20<@!','920gHjxEX','Service','>\x0a>\x20**','reply','log','```','>\x20```','setRequired','png','load','NoPermsMessage','addIntegerOption','suggestionInformation','./config.yml','Locale','NotInTicketChannel','getString','displayAvatarURL','Currency','Email','readFileSync','Utility','1727886eHJoHs','setTimestamp','then','apply','RJNew','Paypal','1070465qUBuhF','ensure','ChannelID','utf8','tickets','This\x20command\x20has\x20been\x20disabled\x20in\x20the\x20config!','Link','setFooter','4550814lIjTbR','PayPalPrice','roles','**\x20<@!','PayPalService','NET_45','TicketSettings','55EjgONa','PayPalLogTitle','PayPalSeller','length','guild','options','5602146YOIdWq','deferReply','Green','get','TjnuY','suggestionStatus','https://www.freepnglogos.com/uploads/paypal-logo-png-7.png','AllowedRoles','addComponents','exports','discord.js','>\x20**','editReply','constructor','setThumbnail','fYtul','(((.+)+)+)+$','PayPalPayInvoice','PayPalUser','tag','setTitle','Fbyog','1978665LJxjwq','paypal','search','create','iconURL','getUser','cache'];_0x4af4=function(){return _0x352ff9;};return _0x4af4();}function _0x361b(_0x211d2f,_0x5206ab){const _0x3800f4=_0x4af4();return _0x361b=function(_0x177f43,_0x528f9f){_0x177f43=_0x177f43-0x1f1;let _0x4af4be=_0x3800f4[_0x177f43];return _0x4af4be;},_0x361b(_0x211d2f,_0x5206ab);}module[_0x194ef0(0x21f)]={'enabled':commands[_0x194ef0(0x1fa)][_0x194ef0(0x200)][_0x194ef0(0x234)],'data':new SlashCommandBuilder()['setName'](_0x194ef0(0x22d))[_0x194ef0(0x243)](commands[_0x194ef0(0x1fa)]['Paypal'][_0x194ef0(0x24f)])['addUserOption'](_0x5e5179=>_0x5e5179[_0x194ef0(0x239)](_0x194ef0(0x246))[_0x194ef0(0x243)]('User')[_0x194ef0(0x25a)](!![]))[_0x194ef0(0x25e)](_0x126bfe=>_0x126bfe[_0x194ef0(0x239)](_0x194ef0(0x238))[_0x194ef0(0x243)]('Price')[_0x194ef0(0x25a)](!![]))[_0x194ef0(0x251)](_0x457c43=>_0x457c43[_0x194ef0(0x239)]('service')[_0x194ef0(0x243)](_0x194ef0(0x254))[_0x194ef0(0x25a)](!![])),async 'execute'(_0x34b66f,_0x26e8ce){const _0x571ff8=_0x194ef0;if(config[_0x571ff8(0x233)][_0x571ff8(0x234)]===![])return _0x34b66f[_0x571ff8(0x256)]({'content':_0x571ff8(0x206),'ephemeral':!![]});if(config[_0x571ff8(0x233)]['OnlyInTicketChannels']&&!_0x26e8ce[_0x571ff8(0x205)][_0x571ff8(0x24b)](_0x34b66f[_0x571ff8(0x250)]['id']))return _0x34b66f[_0x571ff8(0x256)]({'content':config[_0x571ff8(0x1f3)][_0x571ff8(0x1f4)],'ephemeral':!![]});let _0x5503e1=![];for(let _0x31fcb5=0x0;_0x31fcb5<config[_0x571ff8(0x233)][_0x571ff8(0x21d)][_0x571ff8(0x213)];_0x31fcb5++){if(_0x571ff8(0x21a)==='TjnuY'){role=_0x34b66f[_0x571ff8(0x214)][_0x571ff8(0x20b)][_0x571ff8(0x232)][_0x571ff8(0x219)](config['PayPalSettings'][_0x571ff8(0x21d)][_0x31fcb5]);if(role&&_0x34b66f['member'][_0x571ff8(0x20b)][_0x571ff8(0x232)]['has'](config[_0x571ff8(0x233)][_0x571ff8(0x21d)][_0x31fcb5]))_0x5503e1=!![];}else{if(_0x21b566){const _0x1fef56=_0x4c1909['apply'](_0x25048c,arguments);return _0x386134=null,_0x1fef56;}}}if(_0x5503e1===![])return _0x34b66f[_0x571ff8(0x256)]({'content':config[_0x571ff8(0x1f3)][_0x571ff8(0x25d)],'ephemeral':!![]});let _0x537c0a=_0x34b66f[_0x571ff8(0x215)][_0x571ff8(0x231)](_0x571ff8(0x246)),_0x59f389=_0x34b66f[_0x571ff8(0x215)]['getInteger'](_0x571ff8(0x238)),_0x38b564=_0x34b66f['options'][_0x571ff8(0x1f5)]('service');await _0x34b66f[_0x571ff8(0x217)]();let _0x27fd63={'merchant_info':{'email':config['PayPalSettings'][_0x571ff8(0x1f8)],'business_name':_0x34b66f[_0x571ff8(0x214)][_0x571ff8(0x248)]},'items':[{'name':_0x38b564,'quantity':0x1,'unit_price':{'currency':config['PayPalSettings'][_0x571ff8(0x1f7)],'value':_0x59f389}}],'logo_url':_0x34b66f['guild'][_0x571ff8(0x230)](),'note':'','payment_term':{'term_type':_0x571ff8(0x20e)},'tax_inclusive':![]};_0x26e8ce[_0x571ff8(0x22d)][_0x571ff8(0x24e)][_0x571ff8(0x22f)](_0x27fd63,(_0x1f43fc,_0x201130)=>{const _0x278e23=_0x571ff8;if(_0x278e23(0x22b)===_0x278e23(0x225)){_0x44af5e=_0x14a0bf[_0x278e23(0x214)][_0x278e23(0x20b)][_0x278e23(0x232)][_0x278e23(0x219)](_0x1f18cf[_0x278e23(0x233)][_0x278e23(0x21d)][_0x9258b6]);if(_0x436315&&_0x38be86['member'][_0x278e23(0x20b)]['cache'][_0x278e23(0x24b)](_0x473f31[_0x278e23(0x233)][_0x278e23(0x21d)][_0x4b60ec]))_0x2a143b=!![];}else _0x1f43fc?console[_0x278e23(0x257)](_0x1f43fc):_0x26e8ce[_0x278e23(0x22d)][_0x278e23(0x24e)]['send'](_0x201130['id'],function(_0x3ec458,_0x4d955d){const _0x286c70=_0x278e23;if(_0x286c70(0x23e)===_0x286c70(0x23e)){if(_0x1f43fc)console[_0x286c70(0x257)](_0x1f43fc);else{const _0x594591=new ActionRowBuilder()[_0x286c70(0x21e)](new ButtonBuilder()[_0x286c70(0x247)](_0x286c70(0x207))[_0x286c70(0x245)](_0x286c70(0x241)+_0x201130['id'])['setLabel'](config['Locale'][_0x286c70(0x227)])),_0x351c6c=new EmbedBuilder()[_0x286c70(0x22a)](config[_0x286c70(0x1f3)]['PayPalInvoiceTitle'])[_0x286c70(0x242)](config[_0x286c70(0x237)])[_0x286c70(0x224)](_0x286c70(0x21c))[_0x286c70(0x243)](config[_0x286c70(0x1f3)]['PayPalInvoiceMsg'])[_0x286c70(0x24a)]([{'name':'•\x20'+config[_0x286c70(0x1f3)][_0x286c70(0x1f1)],'value':_0x286c70(0x221)+config['Locale'][_0x286c70(0x212)]+_0x286c70(0x20c)+_0x34b66f['user']['id']+_0x286c70(0x255)+config[_0x286c70(0x1f3)]['PayPalUser']+_0x286c70(0x20c)+_0x537c0a['id']+_0x286c70(0x255)+config[_0x286c70(0x1f3)]['PayPalPrice']+'**\x20'+config[_0x286c70(0x233)][_0x286c70(0x236)]+_0x59f389+'\x20('+config[_0x286c70(0x233)]['Currency']+_0x286c70(0x240)+config[_0x286c70(0x1f3)][_0x286c70(0x21b)]+'**\x20🔴\x20UNPAID'},{'name':'•\x20'+config[_0x286c70(0x1f3)]['PayPalService'],'value':_0x286c70(0x259)+_0x38b564+_0x286c70(0x258)}])[_0x286c70(0x1fc)]()[_0x286c70(0x208)]({'text':''+_0x537c0a[_0x286c70(0x229)],'iconURL':''+_0x537c0a[_0x286c70(0x1f6)]({'format':'png','dynamic':!![],'size':0x400})});_0x34b66f[_0x286c70(0x222)]({'embeds':[_0x351c6c],'components':[_0x594591]})[_0x286c70(0x1fd)](async function(_0x4902d4){const _0x22f195=_0x286c70;if(_0x22f195(0x1ff)==='RJNew'){await _0x26e8ce[_0x22f195(0x23c)][_0x22f195(0x202)](''+_0x201130['id'],{'userID':_0x537c0a['id'],'sellerID':_0x34b66f['user']['id'],'channelID':_0x34b66f[_0x22f195(0x250)]['id'],'messageID':_0x4902d4['id'],'invoiceID':_0x201130['id'],'price':_0x59f389,'service':_0x38b564,'status':_0x201130[_0x22f195(0x244)]});let _0x49fa6a;if(!config[_0x22f195(0x249)][_0x22f195(0x203)])_0x49fa6a=_0x34b66f['guild']['channels']['cache'][_0x22f195(0x219)](config[_0x22f195(0x20f)]['LogsChannelID']);if(config[_0x22f195(0x249)][_0x22f195(0x203)])_0x49fa6a=_0x34b66f['guild']['channels'][_0x22f195(0x232)]['get'](config[_0x22f195(0x249)][_0x22f195(0x203)]);const _0x357327=new EmbedBuilder()[_0x22f195(0x242)](_0x22f195(0x218))['setTitle'](config[_0x22f195(0x1f3)][_0x22f195(0x211)])[_0x22f195(0x24a)]([{'name':'•\x20'+config[_0x22f195(0x1f3)]['logsExecutor'],'value':'>\x20<@!'+_0x34b66f[_0x22f195(0x246)]['id']+_0x22f195(0x23a)+_0x34b66f['user']['tag']},{'name':'•\x20'+config['Locale'][_0x22f195(0x228)],'value':_0x22f195(0x252)+_0x537c0a['id']+'>\x0a>\x20'+_0x537c0a[_0x22f195(0x229)]},{'name':'•\x20'+config[_0x22f195(0x1f3)][_0x22f195(0x20a)],'value':'>\x20'+config[_0x22f195(0x233)][_0x22f195(0x236)]+_0x59f389},{'name':'•\x20'+config[_0x22f195(0x1f3)][_0x22f195(0x20d)],'value':'>\x20'+_0x38b564}])[_0x22f195(0x1fc)]()[_0x22f195(0x224)](_0x34b66f[_0x22f195(0x246)][_0x22f195(0x1f6)]({'format':_0x22f195(0x25b),'dynamic':!![],'size':0x400}))[_0x22f195(0x208)]({'text':''+_0x34b66f[_0x22f195(0x246)]['tag'],'iconURL':''+_0x34b66f[_0x22f195(0x246)]['displayAvatarURL']({'format':_0x22f195(0x25b),'dynamic':!![],'size':0x400})});if(_0x49fa6a&&config[_0x22f195(0x249)]['Enabled'])_0x49fa6a['send']({'embeds':[_0x357327]});}else return _0x426e1d[_0x22f195(0x23f)]()[_0x22f195(0x22e)](_0x22f195(0x226))[_0x22f195(0x23f)]()[_0x22f195(0x223)](_0x16efa0)[_0x22f195(0x22e)](_0x22f195(0x226));});}}else{const _0x5a5bda=_0x3bcec4[_0x286c70(0x1fe)](_0x28f884,arguments);return _0x150071=null,_0x5a5bda;}});});}};