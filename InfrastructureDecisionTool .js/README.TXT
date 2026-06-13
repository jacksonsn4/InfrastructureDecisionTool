Infrastructure Decision Tool

Subnet example:
VPC /24, Subnet /26, 10 devices = sufficient.

Subnet example that fails:
VPC /24, Subnet /28, 20 devices = not sufficient.

The program compares the requested subnet size so number of IP is mentioned in subnet. This allows subnet CIDR have range for postive numbers on device
