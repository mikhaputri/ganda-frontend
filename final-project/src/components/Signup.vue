<template>
	<div class="row justify-content-center lg_row">
		<div class="col-md-2">
			<div class="panel panel-default">
				<div class="panel-heading">
					Sign Up
				</div>
				<div class="panel-body">
					<form>
						<div class="form-group">
							<input type="text" class="form-control" id="sg_firstname" name="sg_firstname" placeholder="first name">
						</div>
						<div class="form-group">
							<input type="text" class="form-control" id="sg_lastname" name="sg_lastname" placeholder="last name">
						</div>
						<div class="form-group">
							<input type="text" class="form-control" id="sg_username" name="sg_username" placeholder="username">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" id="sg_password" name="sg_password" placeholder="password">
						</div>
						<div class="form-group" action="HelloWorld.vue">
							<a class="btn btn-primary" href="#" role="button">Sign Up</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style>
.lg_row{
	margin-top: 10%;
}
</style>