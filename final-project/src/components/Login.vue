<template>
	<div class="row justify-content-center lg_row">
		<div class="col-md-2">
			<div class="panel panel-default">
				<div class="panel-heading">
					Log In
				</div>
				<div class="panel-body">
					<form>
						<div class="form-group">
							<input type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username">
						</div>
						<div class="form-group">
							<input type="password" class="form-control" id="lg_password" name="lg_password" placeholder="password">
						</div>
						<div class="form-group" action="HelloWorld.vue">
							<a class="btn btn-primary" href="#" role="button">Log In</a>
						</div>
					</form>
				</div>
				<div>
					<p>Doesn't have account yet?
						<a href="#/signup">Create account</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
.lg_row{
	margin-top: 10%;
}
</style>