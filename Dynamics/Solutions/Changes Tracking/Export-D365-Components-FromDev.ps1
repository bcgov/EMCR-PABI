Connect-CrmOnPremDiscovery -InteractiveMode

#Export and Extract All D365 Components from DEV as UNMANAGED
Export-CrmSolution D365ComponentsForChangesTrackingInDEV
C:\Projects\DevOps\D365Tools\coretools\SolutionPackager /action:Extract /zipfile:D365ComponentsForChangesTrackingInDEV_unmanaged_1_0_0.zip /folder:D365-Components/Unmanaged

#Export and Extract All D365 Components from DEV as MANAGED
Export-CrmSolution D365ComponentsForChangesTrackingInDEV -Managed
C:\Projects\DevOps\D365Tools\coretools\SolutionPackager /action:Extract /zipfile:D365ComponentsForChangesTrackingInDEV_managed_1_0_0.zip /folder:D365-Components/Managed
