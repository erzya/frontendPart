<div class="container">
    <h2 ng-bind="tableName"></h2>
    <!-- pass in the variable if our form is valid or invalid -->
    <form name="archTypeObjForm" ng-submit="saveArchObjType()" novalidate>

        <!-- NAME -->
        <div ng-class="{ 'has-error' : archTypeObjForm.name.$invalid && !archTypeObjForm.name.$pristine }">
            <label>Наименование</label>
            <input type="text" name="name" class="form-control" ng-model="archTypeObj.name" required ng-minlength="3" ng-maxlength="80">
            <p ng-show="archTypeObjForm.name.$error.minlength" class="help-block">Client name is too short.</p>
            <p ng-show="archTypeObjForm.name.$error.maxlength" class="help-block">Client name is too long.</p>
        </div>

        <!-- Parent Type-->
        <div ng-class="{ 'has-error' : archTypeObjForm.phone.$invalid && !archTypeObjForm.phone.$pristine }">
            <label>Тип объекта</label>
            <input type="text" name="phone" class="form-control" ng-model="archTypeObj.parent" required />
            <p ng-show="archTypeObjForm.phone.$error.pattern" class="help-block">Enter valid number!</p>
        </div>

        <!-- archObject -->
        <div ng-class="{'has-error' : archTypeObjForm.client.$invalid && !archTypeObjForm.name.$pristine}">
            <label>Список объектов</label>
            <select class="form-control" name="archObj" ng-model="archTypeObj.archObjects" ng-options="archObjects.name for client in listClients" required>
                <option value="">Выбрать объектt</option>
            </select>
            <br/>
        </div>

        <!-- SUBMIT BUTTON -->
        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
</div>