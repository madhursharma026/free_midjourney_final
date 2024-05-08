export const forgotPasswordTemplate = ({username, link}: {username: string, link: string}) => `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Password Reset - Freemidjourneyai</title>
	<style>
		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			background-color: #f5f5f5;
			margin: 0;
			padding: 0;
		}

		.container {
			max-width: 500px;
			margin: 20px auto;
			background-color: #ffffff;
			padding: 30px;
			border-radius: 10px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		}

		h1 {
			color: #4a90e2;
			text-align: center;
			font-size: 28px;
		}

		p {
			color: #555555;
			font-size: 16px;
			line-height: 1.5;
		}

		ol {
			margin: 10px 0;
			padding-left: 20px;
		}

		li {
			color: #555555;
			font-size: 16px;
			line-height: 1.5;
			margin-bottom: 10px;
		}

		a {
			color: #4a90e2;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.footer {
			margin-top: 20px;
			text-align: center;
			color: #888888;
		}
	</style>
</head>

<body>
	<div class="container">
		<h1>🚀 Password Reset for Your Freemidjourneyai Account</h1>
		<p>Dear ${username},</p>
		<p>We received a request to reset the password for your Freemidjourneyai account. To embark on this journey of
			resetting your password, please follow the stardust instructions below:</p>
		<ol>
			<li>🌌 Click on the following link to reset your password:
				<a href="${link}">Reset Password</a>
			</li>
			<li>🚀 If the above link doesn't work, bravely copy and paste the following cosmic URL into your browser:
				${link}
			</li>
		</ol>
		<p>🌠 Please note that this link is valid for the next 1 hour.</p>
		<p>If you did not initiate this password reset, or if you believe it was a mistake, please disregard this
			interstellar email.</p>
		<p class="footer">May the force be with you,<br>The Freemidjourneyai Team 🌌</p>
	</div>
</body>

</html>
`