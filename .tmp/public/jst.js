this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/button.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<md-button class="md-icon-button">\r\n   \r\n</md-button>';

}
return __p
};

this["JST"]["assets/templates/chiffrage/chiffrage.add.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout="column" ng-cloak class="md-inline-form">\r\n    <md-content layout-padding>\r\n        <form name="dpForm">\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Number</label>\r\n            <input type="number" min="0" required md-no-asterisk name="numero" ng-model="dp.numero">\r\n            <div ng-messages="dpForm.numero.$error">\r\n            <div ng-message="required">This is required.</div>\r\n            <div ng-message="min">The number must be greater than 0.</div>\r\n            </div>\r\n        </md-input-container>\r\n\r\n        <div layout="row">\r\n            <md-input-container flex="50">\r\n            <label>Client Name</label>\r\n            <input required name="clientName" ng-model="project.clientName">\r\n            <div ng-messages="projectForm.clientName.$error">\r\n                <div ng-message="required">This is required.</div>\r\n            </div>\r\n            </md-input-container>\r\n\r\n            <md-input-container flex="50">\r\n            <label>Client</label>\r\n            <md-select name="type" ng-model="dp.client" required>\r\n                <md-option value="app">Application</md-option>\r\n                <md-option value="web">Website</md-option>\r\n            </md-select>\r\n            </md-input-container>\r\n        </div>\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Client Email</label>\r\n            <input required type="email" name="clientEmail" ng-model="project.clientEmail"\r\n                minlength="10" maxlength="100" ng-pattern="/^.+@.+\\..+$/" />\r\n\r\n            <div ng-messages="projectForm.clientEmail.$error" role="alert">\r\n            <div ng-message-exp="[\'required\', \'minlength\', \'maxlength\', \'pattern\']">\r\n                Your email must be between 10 and 100 characters long and look like an e-mail address.\r\n            </div>\r\n            </div>\r\n        </md-input-container>\r\n\r\n        <md-input-container class="md-block">\r\n            <label>Hourly Rate (USD)</label>\r\n            <input required type="number" step="any" name="rate" ng-model="project.rate" min="800"\r\n                max="4999" ng-pattern="/^1234$/" />\r\n\r\n            <div ng-messages="projectForm.rate.$error" multiple md-auto-hide="false">\r\n            <div ng-message="required">\r\n                You\'ve got to charge something! You can\'t just <b>give away</b> a Missile Defense\r\n                System.\r\n            </div>\r\n\r\n            <div ng-message="min">\r\n                You should charge at least $800 an hour. This job is a big deal... if you mess up,\r\n                everyone dies!\r\n            </div>\r\n\r\n            <div ng-message="pattern">\r\n                You should charge exactly $1,234.\r\n            </div>\r\n\r\n            <div ng-message="max">\r\n                {{projectForm.rate.$viewValue | currency:"$":0}} an hour? That\'s a little ridiculous. I\r\n                doubt even Bill Clinton could afford that.\r\n            </div>\r\n            </div>\r\n        </md-input-container>\r\n\r\n        <div>\r\n            <md-button class="md-fab md-primary">\r\n                <md-icon>save</md-icon>\r\n                <md-tooltip md-direction="bottom"> Add a Dp<md-tooltip>\r\n            </md-button>\r\n            <md-button class="md-fab">\r\n                <md-icon>cancel</md-icon>\r\n                <md-tooltip md-direction="bottom">Cancel creating Dp<md-tooltip>\r\n            </md-button>\r\n        </div>\r\n\r\n        <p style="font-size:.8em; width: 100%; text-align: center;">\r\n            Make sure to include <a href="https://docs.angularjs.org/api/ngMessages" target="_blank">ngMessages</a> module when using ng-message markup.\r\n        </p>\r\n        </form>\r\n    </md-content>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/chiffrage/chiffrage.list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="ChiffrageListController">\r\n    \r\n    <md-toolbar class="md-table-toolbar md-default" ng-hide="options.rowSelection && selected.length">\r\n        <div class="md-toolbar-tools">\r\n            <span></span>\r\n            <div flex></div>\r\n            <md-button class="md-icon-button" aria-label="Add Dp" ui-sref="home.chiffrage.add">\r\n                <md-icon>add</md-icon> \r\n                <md-tooltip md-direction="bottom"> Add a Dp<md-tooltip>\r\n            </md-button>\r\n            <md-button class="md-icon-button" ng-click="refresh()">\r\n                <md-icon>refresh</md-icon>\r\n                <md-tooltip md-direction="bottom">Refresh<md-tooltip>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-table-container>\r\n        <table md-table md-row-select multiple ng-model="selected" md-progress="promise">\r\n            <thead md-head md-order="query.order" md-on-reorder="getDesserts">\r\n            <tr md-row>\r\n                <th md-column md-order-by="nameToLower">Numero</th>\r\n                <th md-column md-numeric>Version</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody md-body>\r\n            <tr md-row md-select="dessert" md-select-id="numero" md-auto-select ng-repeat="dp in dps">\r\n                <td md-cell>{{dp.numero}}</td>\r\n                <td md-cell>{{dp.version}}</td>\r\n                \r\n                <td md-cell><md-button  class="md-icon-button"><md-icon>delete</md-icon><md-tooltip>Delete Dp N°{{dp.numero}}</md-tooltip></md-button></td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </md-table-container>\r\n\r\n    <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{desserts.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/client/client.form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n  <!--<panel-widget flex title="Memory load" template="templates/partials/memory.html" class="fixed-height-widget" options=\'true\'></panel-widget>-->\r\n  <panel-widget flex title="Gestion des clients"  class="fixed-height-widget" options=\'true\'>\r\n    <md-content layout-padding ng-controller="ClientController">\r\n        {{editMode()?\'Mode Edition\':\'Mode Ajout\'}}\r\n            <form name="frm">\r\n                <!--<md-toolbar class="md-table-toolbar md-default">\r\n                    <div class="md-toolbar-tools">\r\n                        <md-button class="md-fab md-primary md-mini" aria-label="Return" ng-click="return()">\r\n                            <md-icon>chevron_left</md-icon> \r\n                            <md-tooltip md-direction="bottom">Return<md-tooltip>\r\n                        </md-button>\r\n                    </div>\r\n                </md-toolbar>-->\r\n                \r\n                <md-input-container class="md-block">\r\n                    <label>Name</label>\r\n                    <input minlength="3" maxlength="100" required md-no-asterisk name="nom" ng-model="client.nom">\r\n                    <div ng-messages="frm.nom.$error">\r\n                    <div ng-message="required">This is required.</div>\r\n                    <div ng-message="minlength">Must have 3 characters at least.</div>\r\n                    <div ng-message="maxlength">Must have 100 characters max.</div>\r\n                    </div>\r\n                </md-input-container>\r\n\r\n                <div layout="row">\r\n                    <md-input-container flex="30">\r\n                    <label>Telephone</label>\r\n                    <input required name="telephone" ng-model="client.telephone">\r\n                    <div ng-messages="frm.telephone.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                    </div>\r\n                    </md-input-container>\r\n\r\n                   \r\n                </div>\r\n                <md-divider ng-if="editMode()"></md-divider>\r\n                <md-input-container class="md-block" ng-if="editMode()">\r\n                \r\n                    <md-toolbar class="md-table-toolbar md-default" ng-hide="options.rowSelection && selected.length">\r\n                        <div class="md-toolbar-tools">\r\n                            <span>Contacts</span>\r\n                            <div flex></div>\r\n                            <md-button class="md-icon-button" aria-label="Add contact" ui-sref="home.contact.add({clientid:client.id})">\r\n                                <md-icon>add</md-icon> \r\n                                <md-tooltip md-direction="bottom"> Add a contact<md-tooltip>\r\n                            </md-button>\r\n                            <md-button class="md-icon-button" ng-click="loadStuff()">\r\n                                <md-icon>refresh</md-icon>\r\n                                <md-tooltip md-direction="bottom">Refresh<md-tooltip>\r\n                            </md-button>\r\n                        </div>\r\n                    </md-toolbar>\r\n                    <md-table-container>\r\n                        <table md-table md-row-select multiple ng-model="selected" md-progress="promise">\r\n                            <thead md-head md-order="query.order" md-on-reorder="getDesserts">\r\n                            <tr md-row>\r\n                                <th md-column md-order-by="nameToLower">Nom Prenom</th>\r\n                                <th md-column md-numeric>Email</th>\r\n                                <th md-column md-numeric>Telephone</th>\r\n                                <th>&nbsp;</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody md-body>\r\n                            <tr md-row md-select="contact" md-select-id="id" md-auto-select ng-repeat="contact in client.contacts">\r\n                                <td md-cell>{{contact.civilite}} {{contact.nom}} {{contact.prenom}}</td>\r\n                                <td md-cell>{{contact.email || \'-\'}}</td>\r\n                                <td md-cell>{{contact.telephone || \'-\'}}</td>\r\n                                <td md-cell>\r\n                                    <md-button class="md-icon-button"  ui-sref="home.contact.edit({id:contact.id})"><md-icon>edit</md-icon><md-tooltip>Edit {{contact.nom}} {{contact.prenom}}</md-tooltip></md-button>\r\n                                    <md-button class="md-icon-button" ng-click="delete($event,contact)"><md-icon>delete</md-icon><md-tooltip>Delete {{contact.nom}} {{contact.prenom}}</md-tooltip></md-button>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </md-table-container>\r\n                \r\n                </md-input-container>\r\n\r\n\r\n                <md-toolbar class="md-table-toolbar md-default">\r\n                    <div class="md-toolbar-tools">\r\n                        <md-button class="md-fab md-primary md-mini" aria-label="Save Client" ng-click="save($event)">\r\n                            <md-icon>save</md-icon> \r\n                            <md-tooltip md-direction="bottom">Save client<md-tooltip>\r\n                        </md-button>\r\n                        <md-button class="md-fab md-mini" aria-label="Add Dp" ng-click="cancel()">\r\n                            <md-icon>cancel</md-icon> \r\n                            <md-tooltip md-direction="bottom">Cancel saving client<md-tooltip>\r\n                        </md-button>\r\n                    </div>\r\n                </md-toolbar>\r\n            </form>\r\n        </md-content>\r\n   </panel-widget>\r\n</div>\r\n        \r\n';

}
return __p
};

this["JST"]["assets/templates/client/client.list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n    <panel-widget flex title="Gestion des clients"  class="fixed-height-widget" options=\'true\'>\r\n        <div ng-controller="ClientListController">\r\n            <list-toolbar></list-toolbar>\r\n            <!--<md-toolbar class="md-table-toolbar md-default" ng-hide="options.rowSelection && selected.length">\r\n                <div class="md-toolbar-tools">\r\n                    <span></span>\r\n                    <div flex></div>\r\n                    <md-button class="md-icon-button" aria-label="Add Client" ui-sref="home.client.add">\r\n                        <md-icon>add</md-icon> \r\n                        <md-tooltip md-direction="bottom"> Add a Client<md-tooltip>\r\n                    </md-button>\r\n                    <md-button class="md-icon-button" ng-click="refresh()">\r\n                        <md-icon>refresh</md-icon>\r\n                        <md-tooltip md-direction="bottom">Refresh<md-tooltip>\r\n                    </md-button>\r\n                </div>\r\n            </md-toolbar>-->\r\n            <md-table-container>\r\n                <table md-table md-row-select multiple ng-model="selected" md-progress="promise">\r\n                    <thead md-head md-order="query.order" md-on-reorder="getDesserts">\r\n                    <tr md-row>\r\n                        <th md-column md-order-by="nameToLower">Nom</th>\r\n                        <th md-column md-numeric>Telephone</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody md-body>\r\n                    <tr md-row md-select="client" md-select-id="numero" md-auto-select ng-repeat="client in clients">\r\n                        <td md-cell>{{client.nom}}</td>\r\n                        <td md-cell>{{client.telephone}}</td>\r\n                        \r\n                        <td md-cell>\r\n                            <!--<md-button class="md-icon-button" ng-click="edit($event,client)"><md-icon>edit</md-icon><md-tooltip>Edit {{client.nom}}</md-tooltip></md-button>\r\n                            <md-button class="md-icon-button" ng-click="delete($event,client)"><md-icon>delete</md-icon><md-tooltip>Delete {{client.nom}}</md-tooltip></md-button>-->\r\n                            <item-delete-edit-buttons></item-delete-edit-buttons>\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </md-table-container>\r\n\r\n            <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{clients.count}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>\r\n        </div>\r\n    </panel-widget>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/component/dynform/dyn.input.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<input type="text" name="{{dyn.name}}"></input>';

}
return __p
};

this["JST"]["assets/templates/component/dynform/dyn.row.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout="row">\r\n    \r\n</div>';

}
return __p
};

this["JST"]["assets/templates/component/dynform/ngRow.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout="row" ng-transclude></div>';

}
return __p
};

this["JST"]["assets/templates/contact/contact.form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n  <panel-widget flex title="Gestion des contacts"  class="fixed-height-widget" options=\'true\'>\r\n     <md-content layout-padding ng-controller="ContactController as vm"  ng-init="vm.resource=\'contact\';vm.loadOrEdit();">\r\n        {{vm.editMode()?\'Mode Edition\':\'Mode Ajout\'}}\r\n        {{vm.resource}}\r\n            <form name="frm">\r\n                 <textarea ui-tinymce="vm.tinymceOptions" ng-model="vm.frm"></textarea>\r\n                <div layout="row" >\r\n                    <md-input-container flex="30" ng-if="vm.addMode()">\r\n                        <label>Client</label>\r\n                        \r\n                        <md-select name="client" ng-model="vm.item.client.id" required >\r\n                            <md-option ng-repeat="client in vm.clients" ng-value="client.id" >\r\n                                {{client.nom}}\r\n                            </md-option>\r\n                        </md-select>\r\n                        <div ng-messages="frm.client.$error">\r\n                            <div ng-message="required">This is required.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                    <md-input-container flex="30" ng-if="vm.editMode()">\r\n                        <label>Client</label>\r\n                        <input name="nom" ng-model="vm.item.client.nom" ng-disabled="true">\r\n                        \r\n                    </md-input-container>\r\n                   \r\n                </div>\r\n                \r\n                <div layout-gt-sm="row">\r\n                    <md-input-container class="md-block" flex-gt-sm>\r\n                        <label>Civility</label>\r\n                        <md-select ng-model="vm.item.civilite">\r\n                            <md-option ng-repeat="civilite in vm.civilites" ng-value="civilite" ng-selected="{{ civilite === vm.item.civilite }}">\r\n                                {{civilite}}\r\n                            </md-option>\r\n                        </md-select>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block" flex-gt-sm>\r\n                        <label>Firstname</label>\r\n                        <input minlength="3" maxlength="100" required md-no-asterisk name="nom" ng-model="vm.item.nom">\r\n                        <div ng-messages="frm.nom.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                        <div ng-message="minlength">Must have 3 characters at least.</div>\r\n                        <div ng-message="maxlength">Must have 100 characters max.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block" flex-gt-sm>\r\n                        <label>Lastname</label>\r\n                        <input minlength="3" maxlength="100" required md-no-asterisk name="prenom" ng-model="vm.item.prenom">\r\n                        <div ng-messages="frm.prenom.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                        <div ng-message="minlength">Must have 3 characters at least.</div>\r\n                        <div ng-message="maxlength">Must have 100 characters max.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                </div>\r\n                \r\n\r\n                <div layout="row">\r\n                    <md-input-container flex="30">\r\n                    <label>Telephone</label>\r\n                    <input required name="telephone" ng-model="vm.item.telephone">\r\n                    <div ng-messages="frm.telephone.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                    </div>\r\n                    </md-input-container>\r\n                </div>\r\n               \r\n                <save-cancel-toolbar></save-cancel-toolbar>\r\n\r\n            </form>\r\n        </md-content>\r\n   </panel-widget>\r\n</div>\r\n        \r\n';

}
return __p
};

this["JST"]["assets/templates/contact/contact.list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n    <panel-widget flex title="Contacts" template="templates/partials/contact/contact.list.partial.html" class="fixed-height-widget" options=\'true\'></panel-widget>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/contact/dyn.contact.form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n  <panel-widget flex title="Gestion des contacts"  class="fixed-height-widget" options=\'true\'>\r\n     <md-content layout-padding ng-controller="ContactController as vm"  ng-init="vm.resource=\'contact\';vm.loadOrEdit();">\r\n        {{vm.editMode()?\'Mode Edition\':\'Mode Ajout\'}}\r\n        {{vm.resource}}{{vm.jsonTemplate}}\r\n            <dyn-form json-template="{{vm.jsonTemplate}}">toto\r\n            </dyn-form>\r\n        </md-content>\r\n   </panel-widget>\r\n</div>\r\n        \r\n';

}
return __p
};

this["JST"]["assets/templates/dashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n  <!--<panel-widget flex title="Memory load" template="templates/partials/memory.html" class="fixed-height-widget" options=\'true\'></panel-widget>-->\r\n  <panel-widget flex title="Offre de Prix" template="templates/chiffrage/chiffrage.list.html" class="fixed-height-widget" options=\'true\'></panel-widget>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/dp/dp.form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n   <panel-widget flex title="Gestion des Offres de prix"  class="fixed-height-widget" options=\'true\'>\r\n     <md-content layout-padding ng-controller="DpController as vm"  ng-init="vm.resource=\'dp\';vm.loadOrEdit();">\r\n       {{vm.editMode()?\'Mode Edition\':\'Mode Ajout\'}}\r\n        {{vm.resource}}\r\n        <form name="frm">\r\n            <textarea ui-tinymce="vm.tinymceOptions" ng-model="vm.tinymceModel"></textarea>\r\n                <div layout-gt-sm="row">\r\n                    <md-input-container class="md-block" flex-gt-sm ng-if=>\r\n                        <input type="number" min="1" required md-no-asterisk name="nom" ng-model="vm.item.numero" disabled="true">\r\n                        <div ng-messages="frm.nom.$error">\r\n                            <div ng-message="required">This is required.</div>\r\n                            <div ng-message="min">Must be greater than 0.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                    \r\n                </div>\r\n                <div layout="row" >\r\n                    <md-input-container flex="30" ng-if="vm.addMode()">\r\n                        <label>Client</label>\r\n                        \r\n                        <md-select name="client" ng-model="vm.item.client.id" required >\r\n                            <md-option ng-repeat="client in vm.clients" ng-value="client.id" >\r\n                                {{client.nom}}\r\n                            </md-option>\r\n                        </md-select>\r\n                        <div ng-messages="frm.client.$error">\r\n                            <div ng-message="required">This is required.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                    <md-input-container flex="30" ng-if="vm.editMode()">\r\n                        <label>Client</label>\r\n                        <input name="nom" ng-model="vm.item.client.nom" ng-disabled="true">\r\n                        \r\n                    </md-input-container>\r\n                   \r\n                </div>\r\n                \r\n                <div layout-gt-sm="row">\r\n                    <md-input-container class="md-block" flex-gt-sm>\r\n                        <label>Civility</label>\r\n                        <md-select ng-model="vm.item.civilite">\r\n                            <md-option ng-repeat="civilite in vm.civilites" ng-value="civilite" ng-selected="{{ civilite === vm.item.civilite }}">\r\n                                {{civilite}}\r\n                            </md-option>\r\n                        </md-select>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block" flex-gt-sm>\r\n                        <label>Firstname</label>\r\n                        <input minlength="3" maxlength="100" required md-no-asterisk name="nom" ng-model="vm.item.nom">\r\n                        <div ng-messages="frm.nom.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                        <div ng-message="minlength">Must have 3 characters at least.</div>\r\n                        <div ng-message="maxlength">Must have 100 characters max.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                    <md-input-container class="md-block" flex-gt-sm>\r\n                        <label>Lastname</label>\r\n                        <input minlength="3" maxlength="100" required md-no-asterisk name="prenom" ng-model="vm.item.prenom">\r\n                        <div ng-messages="frm.prenom.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                        <div ng-message="minlength">Must have 3 characters at least.</div>\r\n                        <div ng-message="maxlength">Must have 100 characters max.</div>\r\n                        </div>\r\n                    </md-input-container>\r\n                </div>\r\n                \r\n\r\n                <div layout="row">\r\n                    <md-input-container flex="30">\r\n                    <label>Telephone</label>\r\n                    <input required name="telephone" ng-model="vm.item.telephone">\r\n                    <div ng-messages="frm.telephone.$error">\r\n                        <div ng-message="required">This is required.</div>\r\n                    </div>\r\n                    </md-input-container>\r\n                </div>\r\n               \r\n                <save-cancel-toolbar></save-cancel-toolbar>\r\n\r\n            </form>\r\n      </md-content>\r\n   </panel-widget>\r\n</div>\r\n        \r\n';

}
return __p
};

this["JST"]["assets/templates/dp/dp.list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div layout-gt-md="row">\r\n    <panel-widget flex title="Gestion des offres de prix"  class="fixed-height-widget" options=\'true\'>\r\n        <div ng-controller="ListController" ng-init="resource=\'dp\';refresh();">\r\n            \r\n            <!--<md-toolbar class="md-table-toolbar md-default" ng-hide="options.rowSelection && selected.length">-->\r\n                <list-toolbar></list-toolbar>\r\n                <!--<div class="md-toolbar-tools">\r\n                    <span></span>\r\n                    <div flex></div>\r\n                    <md-button class="md-icon-button" aria-label="Add Client" ui-sref="home.{{resource}}.add">\r\n                        <md-icon>add</md-icon> \r\n                        <md-tooltip md-direction="bottom"> Add a {{resource}}<md-tooltip>\r\n                    </md-button>\r\n                    <md-button class="md-icon-button" ng-click="refresh()">\r\n                        <md-icon>refresh</md-icon>\r\n                        <md-tooltip md-direction="bottom">Refresh<md-tooltip>\r\n                    </md-button>\r\n                </div>-->\r\n            <!--</md-toolbar>-->\r\n            <md-table-container>\r\n                <table md-table md-row-select multiple ng-model="selected" md-progress="promise">\r\n                    <thead md-head md-order="query.order" md-on-reorder="getDesserts">\r\n                        <tr md-row>\r\n                            <th md-column  md-order-by="nameToLower">Numero</th>\r\n                            <th md-column>Client</th>\r\n                            <th>&nbsp;</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody md-body>\r\n                        <tr md-row md-select="item" md-select-id="id" md-auto-select ng-repeat="item in items">\r\n                            <td md-cell>{{item.numero}}</td>\r\n                            <td md-cell>{{item.client.nom}}</td>\r\n\r\n                            <td md-cell>\r\n                                <md-button class="md-icon-button" ui-sref="home.dp.edit({id:item.id})"><md-icon>edit</md-icon><md-tooltip>Edit {{client.nom}}</md-tooltip></md-button>\r\n                                <md-button class="md-icon-button" ng-click="delete($event,item)"><md-icon>delete</md-icon><md-tooltip>Delete {{client.nom}}</md-tooltip></md-button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </md-table-container>\r\n\r\n            <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{items.length}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>\r\n        </div>\r\n        </panel-widget>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/main.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ui-view></div>';

}
return __p
};

this["JST"]["assets/templates/matiere.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n  <md-toolbar>\r\n      <div class="md-toolbar-tools">\r\n        <h2>\r\n          <span>Matiere</span>\r\n        </h2>\r\n        <span flex></span>\r\n        <md-button ng-click="add($event)">\r\n            <md-icon>add</md-icon>\r\n        </md-button>\r\n       \r\n      </div>\r\n    </md-toolbar>\r\n    \r\n  <md-content flex>\r\n    <md-list>\r\n\r\n      <md-list-item class="md-3-line" ng-repeat="matiere in matieres">\r\n        \r\n\r\n        <div class="md-list-item-text">\r\n          <h3>{{matiere.nom}}</h3>\r\n          <h4>{{matiere.densite}} Kg/m&sup3</h4>\r\n           <md-icon class="md-secondary" ng-click="edit($event,matiere)" aria-label="Editer">edit</md-icon>         \r\n        </div>\r\n        <md-divider inset></md-divider>\r\n      </md-list-item>\r\n\r\n    </md-list>\r\n\r\n  </md-content>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/matiere_edit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<md-dialog aria-label="">\r\n  <form name="frmmaterial" ng-cloak>\r\n    <md-toolbar>\r\n      <div class="md-toolbar-tools">\r\n        <h2 ng-if="mode==\'edit\'">Edition de la matiere {{matiere.nom}}</h2>\r\n        <span flex></span>\r\n        <md-button class="md-icon-button" ng-click="cancel()">\r\n          <md-icon aria-label="Close dialog">close</md-icon>\r\n        </md-button>\r\n      </div>\r\n    </md-toolbar>\r\n\r\n    <md-dialog-content>\r\n        <md-input-container class="md-block">\r\n        <label>Matiere</label>\r\n        <md-icon >blur_on</md-icon>\r\n        <input name="nom" ng-model="matiere.nom" type="string"  required>\r\n        <div ng-messages="frmmaterial.nom.$error"  ng-show="frmmaterial.nom.$dirty" ng-messages-multiple>\r\n            <div ng-message="required">This is required.</div>\r\n        </div>\r\n    </md-input-container>\r\n      <md-input-container class="md-block">\r\n            <label>Density</label>\r\n            <md-icon >blur_on</md-icon>\r\n            <input name="density" ng-model="matiere.densite" type="nummber"  required min="0">\r\n            <div ng-messages="frmmaterial.density.$error"  ng-show="frmmaterial.density.$dirty" ng-messages-multiple>\r\n                <div ng-message="required">This is required.</div>\r\n                <div ng-message="min">The density must by higher than 0</div>\r\n            </div>\r\n        </md-input-container>\r\n    </md-dialog-content>\r\n\r\n    <md-dialog-actions layout="row">\r\n      \r\n      <span flex></span>\r\n      <md-button ng-click="cancel()">\r\n       <md-icon>cancel</md-icon>\r\n      </md-button>\r\n      <md-button ng-click="ok()">\r\n          <md-icon>check</md-icon>\r\n      </md-button>\r\n    </md-dialog-actions>\r\n  </form>\r\n</md-dialog>';

}
return __p
};

this["JST"]["assets/templates/matiere_nuance_edit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<md-dialog aria-label="">\r\n  <form name="frmnuance" ng-cloak>\r\n    <md-toolbar>\r\n      <div class="md-toolbar-tools">\r\n        <h2 ng-if="mode==\'edit\'">Edition de la nuance {{matiere.nom}}</h2>\r\n        <h2 ng-if="mode==\'add\'">Ajout d\'une nuance</h2>\r\n        <span flex></span>\r\n        <md-button class="md-icon-button" ng-click="cancel()">\r\n          <md-icon aria-label="Close dialog">close</md-icon>\r\n        </md-button>\r\n      </div>\r\n    </md-toolbar>\r\n\r\n    <md-dialog-content>\r\n        <md-input-container class="md-block">\r\n            <label>Nom</label>\r\n            <md-icon >blur_on</md-icon>\r\n            <input name="nom" ng-model="nuance.nom" type="string"  required>\r\n            <div ng-messages="frmnuance.nom.$error"  ng-show="frmnuance.nom.$dirty" ng-messages-multiple>\r\n                <div ng-message="required">This is required.</div>\r\n            </div>\r\n        </md-input-container>\r\n        <md-input-container class="md-block">\r\n            <label>Matiere</label>\r\n            <md-icon >blur_on</md-icon>\r\n            <md-select placeholder="Assign Material" ng-model="nuance.matiere"  style="min-width: 200px;" name="matiere" required>\r\n                <md-option ng-value="matiere.id" ng-repeat="matiere in matieres" ng-selected="{{ matiere.id === nuance.matiere.id  }}">{{matiere.nom}}</md-option>\r\n            </md-select>\r\n            <div ng-messages="frmnuance.matiere.$error"  ng-show="frmnuance.matiere.$dirty" ng-messages-multiple>\r\n                <div ng-message="required">This is required.</div>\r\n            </div>\r\n        </md-input-container>\r\n        <md-input-container class="md-block">\r\n            <label>Prix &euro;/Kg</label>\r\n            <md-icon >blur_on</md-icon>\r\n            <input name="prix" ng-model="nuance.prix" type="number"  required min="0">\r\n            <div ng-messages="frmnuance.prix.$error"  ng-show="frmnuance.prix.$dirty" ng-messages-multiple>\r\n                <div ng-message="required">This is required.</div>\r\n                <div ng-message="min">This must be greater than 0.</div>\r\n            </div>\r\n        </md-input-container>\r\n    </md-dialog-content>\r\n\r\n    <md-dialog-actions layout="row">\r\n      \r\n      <span flex></span>\r\n      <md-button ng-click="cancel()">\r\n       <md-icon>cancel</md-icon>\r\n      </md-button>\r\n      <md-button ng-click="ok()">\r\n          <md-icon>check</md-icon>\r\n      </md-button>\r\n    </md-dialog-actions>\r\n  </form>\r\n</md-dialog>';

}
return __p
};

this["JST"]["assets/templates/nuancematiere.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n\r\n    \r\n  <md-content flex>\r\n      \r\n    <md-list>\r\n        <md-subheader class="md-no-sticky">Nuance Matière\r\n        <md-button ng-click="add($event)">\r\n            <md-icon>add</md-icon>\r\n        </md-button>\r\n        </md-subheader>\r\n      <md-list-item class="md-3-line" ng-repeat="nuance in nuances">\r\n        <md-icon  ng-click="delete(nuance)" aria-label="Delete">delete</md-icon>\r\n         \r\n           \r\n            <md-icon ng-click="edit($event,nuance)" aria-label="Editer">edit</md-icon>  \r\n\r\n        <div class="md-list-item-text">\r\n          <h3>{{nuance.nom}}</h3>\r\n          <p>{{nuance.matiere.nom}}</p>\r\n          <h4>{{nuance.matiere.densite}} Kg/m&sup3</h4>\r\n          <h4>{{nuance.prix}} &euro;/Kg</h4>\r\n        </div>\r\n            \r\n       \r\n          \r\n        \r\n      </md-list-item>\r\n\r\n    </md-list>\r\n\r\n  </md-content>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/partials/contact/contact.list.partial.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-controller="ListController" ng-init="resource=\'contact\';refresh();">\r\n    \r\n    <md-toolbar class="md-table-toolbar md-default" ng-hide="options.rowSelection && selected.length">\r\n        <div class="md-toolbar-tools">\r\n            <span></span>\r\n            <div flex></div>\r\n            <md-button class="md-icon-button" aria-label="Add Client" ui-sref="home.{{resource}}.add">\r\n                <md-icon>add</md-icon> \r\n                <md-tooltip md-direction="bottom"> Add a {{resource}}<md-tooltip>\r\n            </md-button>\r\n            <md-button class="md-icon-button" ng-click="refresh()">\r\n                <md-icon>refresh</md-icon>\r\n                <md-tooltip md-direction="bottom">Refresh<md-tooltip>\r\n            </md-button>\r\n        </div>\r\n    </md-toolbar>\r\n    <md-table-container>\r\n        <table md-table md-row-select multiple ng-model="selected" md-progress="promise">\r\n            <thead md-head md-order="query.order" md-on-reorder="getDesserts">\r\n                <tr md-row>\r\n                    <th md-column md-order-by="nameToLower">Nom Prenom</th>\r\n                    <th md-column>Client</th>\r\n                    <th md-column >Email</th>\r\n                    <th md-column >Telephone</th>\r\n                    <th>&nbsp;</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody md-body>\r\n                <tr md-row md-select="item" md-select-id="id" md-auto-select ng-repeat="item in items">\r\n                    <td md-cell>{{item.civilite}} {{item.nom}} {{item.prenom}}</td>\r\n                    <td md-cell>{{item.client.nom}}</td>\r\n                    <td md-cell>{{item.email || \'-\'}}</td>\r\n                    <td md-cell>{{item.telephone || \'-\'}}</td>\r\n\r\n                    <td md-cell>\r\n                        <md-button class="md-icon-button" ui-sref="home.contact.edit({id:item.id})"><md-icon>edit</md-icon><md-tooltip>Edit {{client.nom}}</md-tooltip></md-button>\r\n                        <md-button class="md-icon-button" ng-click="delete($event,item)"><md-icon>delete</md-icon><md-tooltip>Delete {{client.nom}}</md-tooltip></md-button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </md-table-container>\r\n\r\n    <md-table-pagination md-limit="query.limit" md-limit-options="[5, 10, 15]" md-page="query.page" md-total="{{items.length}}" md-on-paginate="getDesserts" md-page-select></md-table-pagination>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/partials/memory.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n    <md-content ng-show="$showOptions" class="options">\r\n        <md-radio-group ng-model="vm.performancePeriod" ng-change="vm.changePeriod()">\r\n        <md-radio-button  value="week">Last week</md-radio-button>\r\n        <md-radio-button  value="month">Last month</md-radio-button>\r\n        </md-radio-group>\r\n    </md-content>\r\n    <md-content class="md-padding">\r\n        MEMORY WIDGET\r\n    </md-content>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/settings.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\r\n  \r\n    <md-toolbar>\r\n      <div class="md-toolbar-tools">\r\n        <h2>\r\n          <span>Parametres</span>\r\n        </h2>\r\n        <span flex></span>\r\n        <md-button class="md-raised" aria-label="Matieres" ui-sref="home.settings.matieres">\r\n          Matieres\r\n        </md-button>\r\n         <md-button class="md-raised" aria-label="Nuances Matieres" ui-sref="home.settings.nuancesmatieres">\r\n          Nuances Matieres\r\n        </md-button>\r\n      </div>\r\n    </md-toolbar>\r\n   <md-content>\r\n       <ui-view></ui-view>\r\n  </md-content>\r\n<div>';

}
return __p
};