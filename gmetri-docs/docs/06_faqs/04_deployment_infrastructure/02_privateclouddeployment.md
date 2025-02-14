---
sidebar_label: 'Private Cloud Deployment' #Name in sidebar
sidebar_position: 1 # float position is supported
---

# Private Cloud Deployment
GMetri services, if required, can be deployed safely in your private cloud (firewalled zone). The preferred mode of a private cloud deployment is through Kubernetes.

## Private Cloud Deployment (firewalled zone)
The GMETRI platform deploys as a Kubernetes cluster.  

Below are the hardware and network requirements to set up a Kubernetes cluster in a private cloud that supports the GMetri platform.
### Server Requirements

The following table lists the **minimum** requirements setting up a High Availability (HA) cluster:  

#### On Cloud (AWS/GCP/Azure)


|  **Spec**  |   **Production Values**  |
|:-----|:----|
|  Recommended Node Type  |  AWS: m4.xlarge/m5.xlarge <br/> GC: e2-standard-4 <br/> Azure: D4d v4 |
|  Nodes (Virtual Machines) with vCPUs >2Ghz  |  3 worker nodes <br/>  Min requirement for each node: <br/>  4 core vCPU + 16 GB RAM |
|  RAM  |   16 GB × number of nodes |
|  Storage (SSD Based or better)  |   Min 256 GB per node supporting >500 sequential IOPS |
|  Managed DB instance*  |  Managed DB instances from AWS/GCP/Azure with the minimum config of 4core vCPU + 16 GB RAM |

#### Bare Metal (HA Setup)

|  **Spec**  |   **Production Values** |
|:-----|:----|
| Servers with every core >2Ghz  |  3 (etcd + control plane) + 3 worker nodes <br/> Minimum 4 servers on at-least 3 different physical machines (in case the servers are VMs) <br/>  Min requirement for each node: <br/>  4 core vCPU + 16 GB RAM  |  3 (etcd + controlplane + worker) nodes <br/> Minimum 3 servers <br/> Min requirement for each server: <br/>  4 core vCPU + 16 GB RAM |
|  RAM  |   16 GB × number of nodes  |   16 GB × number of nodes |
|  Storage (SSD Based or better)  |   Min 256 GB per node supporting >500 sequential IOPS  |   Min 128 GB per node |
|  Managed DB instance  |  3 x 4 core vCPU + 16 GB RAM  |  3 x 4 core vCPU + 16 GB RAM |
* Full network connectivity between all systems in the cluster
* Ability to configure open ports on these systems
* **Failure resilience for production servers**: 1 for master nodes and 1 for worker nodes separately. The resilience is of (n-1)/2 nodes per node-type where n is the number of nodes.  


 ## Single Rack-server/Desktop Deployment
We ideally recommend that GMetri is deployed on a cluster setup in a private cloud consisting of a minimum of 3 servers. However, in cases where that is not possible, GMetri can also be deployed on a single rack-server or a desktop.

### Hardware Requirements
The following are the recommended hardware requirements for such a deployment:

| **Hardware**  |	 **Specification**	           | **Example**                      |
| :------------ |:-------------:                 | :-----:                          |
| CPU 	        | A 4-core/8-thread processor 	 |Intel i7-7700K                    |
| RAM	          | 32 GB DDR-4	                   |Corsair LPX 32GB (2x16GB) 3200MHz |
| HDD	          | 256 GB SSD or SAS storage 	   |Samsung 860 EVO 250GB SSD         |
| LAN Ports	    | A single LAN port is enough 	 | (Part of the server/desktop)     |  


 Keep in mind that this is not a HA (High Availability) setup. This means that any hardware failure could lead to permanent loss of data. In cases where data resiliency is critical, we recommend a [cluster setup](#what-are-the-recommended-server-requirements-for-gmetri-deployment-in-a-private-cloud-firewalled-zone).

 ## Which network ports needs to open for a private cloud deployment?
 Ideally, within the cluster, communication needs to be open - i.e. all cluster nodes should be able to contact all ports of all other cluster nodes.  

 However in case a list of open ports is required, you can use the following list:

 | Description |	Within Cluster (In AND Out)  |	External Load Balancer (In)	| Internet (Out) |
|:------------|:----------------------------:|:----------------------------:|:--------------:|
| Kubernetes Specific | 22 TCP <br/> 80 TCP<br/> 443 TCP<br/> 2376 TCP<br/> 2379 TCP<br/> 2380 TCP<br/> 6443 TCP <br/>6783 TCP <br/>6783-6784 UDP<br/> 8472 UDP <br/>9099 TCP<br/> 10250 TCP<br/> 10254 TCP | 80 TCP 443 TCP |  git.rancher.io:<br/> 35.160.43.145:32 <br/>35.167.242.46:32 <br/>52.33.59.17:32 <br/><br/> *.gmetri.com <br/> *.gmetri.io <br/> *.vrgmetri.com <br/> *.docker.io |
|Workload Specific | 30000-32767 TCP & UDP | | |
|Experience Specific |3000-3100 TCP<br/> 3306 TCP<br/> 5432 TCP<br/> 6739 TCP | |  |

### Operating System Requirements
The Operating System used will depend completely on the flavour of Kubernetes deployed. Examples are RancherOS, Ubuntu, CoreOS etc.  

#### Preferred OS
For Bare Metal deployment: Ubuntu 18+  

#### Partitioning
Ensure that there is no swap partition.

| Partition | Space Allocation | Partition Type |
| ----------| -----------------| -------------- |
|  NO swap     |    none   |      |
|   / (root)    |     20 GB  | ext4     |
|    /home   |     10 GB   |   ext4   |
|     /var   |   Remaining space    |   ext4   |


### Network Requirements
#### Network Response Time

| Spec | Web-browser to Datacenter | Within Datacenter |
| ----------| -----------------| -------------- |
|   Bandwidth    |   5 Mbps minimum    |   100 Mbps minimum   |
|  Latency     |    250-300 milliseconds   |   1 millisecond on LAN   |

Within the cluster, ideally communication needs to be open - i.e. all cluster nodes should be able to contact all ports of all other cluster nodes.

In case a list of specific ports is needed, refer to this [here](#which-network-ports-needs-to-open-for-a-private-cloud-deployment).

**Internet Connectivity Requirement** During updates and initial installation, internet connectivity is needed. For usual operations, internet connectivity isn’t required.  

#### Example Rack Server/Desktop Tower configuration

An example of a single rack server or a desktop tower to support the above deployment would be the following:

An example of a single rack server or a desktop tower to support the above deployment would be the following:

| Hardware | Recommended Spec  | Example |
| ---------| -----------------| -------------- |
| CPU      |    A CPU with 4 threads   |  Intel i5-7400 or better    |
| RAM      |    16GB DDR4 or better   |   Corsair LPX 16GB 3200MHz    |
| HDD      |    256 GB SSD or SAS storage   |  Samsung 860 EVO 250GB SSD    |

4 or 6 such servers/desktop towers are required to form a cluster as mentioned above.

For any other queries, write to support@gmetri.com

