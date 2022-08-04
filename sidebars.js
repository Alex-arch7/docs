module.exports = {
  "docs": {
    "About": [
      "about_128t",
      "about_svr_savings",
      "about_releases",
      "about_support_policy",
      "about_supported_platforms",
      "about_supported_drivers",
      "about_certified_platforms",
      "about_security_policy",
      "about_services_description",
      "CONTRIBUTING",
    ],
    "Introduction": [
      "intro_getting_started",
    ],
    "Deployment Considerations": [
      "intro_system_reqs",
    ],
    "Installation Process": [
      "intro_installation",
      "intro_downloading_iso",
      "intro_creating_bootable_usb",
      "intro_installation_bootable_media",
      "intro_basic_conductor_config",
      "intro_basic_router_config",
      "intro_otp_iso_install",
      "intro_install_quickstart_otpiso",
    ],
    "Image-Based Installation": [
      "intro_installation_image",
      "install_onboard_hdware",
    ], 
    "Cloud Installations": [
      "intro_installation_quickstart_aws",
      "intro_installation_azure",
      "intro_initialize_HA_conductor",
    ],
    "Upgrades and Rollback": [
      "intro_upgrade_considerations",
      "intro_upgrading",
      "intro_rollback",
    ],
    "Supporting Install Information - Appendix": [
      "intro_installation_installer",
      "legacy_OTP_install",
    ],
    "Concepts": [
      "concepts_application_discovery",
      "concepts_appid",
      "concepts_EthOverSVR",
      "concepts_ha_theoryofoperation",
      "concepts_interface_types",
      "concepts_kni",
      "concepts_linux_host_networking",
      "concepts_learning_VRF_routes",
      "concepts_network_planes",
      "concepts_metadata",
      "concepts_metrics",
      "concepts_machine_communication",
      "concepts_pcli",
      "concepts_session_timer",
      "concepts_STEP",
      "concepts_waypoint_ports",
      "concepts_glossary",
    ],
    "WAN Assurance": [
      "wan_staging",
      "wan_onboarding_whitebox",
      "wan_site_assignment",
      "wan_onboarding_ssrdevice",
      "config_wan_assurance",
    ],
    "Administration": [
      {
        "type": "category",
        "label": "Configuration",
        "items": [
          "config_basics",
          "config_templates",
          "config_asset_connection_resiliency",

          "config_dscp_steering",
          "config_dscp_preservation",
          "config_vrf_learning",
          "config_audit_event",
          "config_dhcp",
          "config_dns_proxy",
          "config_forward_error_correction",
          "config_management_over_forwarding",
          "config_domain-based_web_filter",
          "config_app_ident",
          "config_EthoSVR",
          "config_flow_perf_mon",
          "config_gre_tunnel",
          "config_in-memory_metrics",
          "config_nat",
          "config_rate_limiting",
          "config_RBAC",
          "config_service_health",
          "config_snmp",
          "howto_config_snmp",
          "config_snmp_metrics",
          "config_static_hostname_mapping",
          "config_tenants",
          "config_transport_encryption",
          "config_wan_assurance",
        ],
      },
      {
        "type": "category",
        "label": "Optimizing Routing Protocols",
        "items": [
          "howto_tune_bfd",
          "config_bgp",
          "config_ospf", 
          "config_bfd", 
        ],
      },      
      {
        "type": "category",
        "label": "High Availability",
        "items": [
         "config_ha",
          "config_dual_router_ha",
          "config_ha_vrrp",
          "config_non_forwarding_ha_interfaces",
          "config_adding_interfaces_to_ha_team",
          "config_transition_standalone_to_ha",
          "config_step_ha",
        ],
      },
      {
        "type": "category",
        "label": "Access Management and Authentication",
        "items": [
          "config_access_mgmt",
          "config_ldap",
          "config_radius",
          "config_password_policies",
        ],
      },
      {
        "type": "category",
        "label": "NTP",
        "items": [
          "config_ntp_auth",
        ],
      },
      {
        "type": "category",
        "label": "Security",
        "items": [
          "sec_adaptive_encrypt",
        ],
      },
      {
        "type": "category",
        "label": "Service and Topology Exchange Protocol (STEP)",
        "items": [
          "config_STEP",
          "config_step_ha",
          "howto_STEP_GUI",
          "ts_step",
        ],
      },
      {
        "type": "category",
        "label": "How To",
        "items": [
          "how_to_use_app_summary",
          "howto_conductor_migration",
          "howto_extend_gui_nav",
          "howto_lte",
          "howto_config_PPPoE",
          "howto_pppoe_vlan",
          "howto_maintenance_mode",
          "howto_ms365",
          "howto_trusted_ca_certificate",
        ],
      },
      {
        "type": "category",
        "label": "Troubleshooting",
        "items": [
          "ts_applications",
          "ts_ap_duplicate_assets",
          "ts_ap_salt_minion",
          "ts_cpu_spikes",
          "ts_connecting_to_routers",
          "ts_forwarding_resource_pools",
          "ts_logs",
          "ts_mac_uniqueness",
          "ts_packet_capture",
          "ts_t1_troubleshooting",
          "ts_troubleshooting_vrf",
        ],
      },
    ],
    "Events": [
      "events_overview",
      "events_alarms",
      "events_events",
    ],
    "Best Practices": [
      "bcp_att_avpn_configuration",
      "bcp_using_128T_as_ntp_server",
      "bcp_conductor_deployment",
      "bcp_per-adjacency_traffic_engineering",
      "bcp_qos_msft_expressroute",
      "bcp_lte_peering",
      "bcp_monitoring_headends",
      "bcp_salt_pillars",
      "bcp_sdwan_design_guide",
      "bcp_service_and_service_policy_design",
      "bcp_service-policy_defaults",
      "bcp_tenants",
    ],
    "CLI and Element Reference": [
      "cli_reference",
      "config_reference_guide",
      "cli_stats_reference",
    ],
    "Installer/Initializer Reference": [
      "installer_cli_reference",
      "installer_preferences",
      "initializer_cli_reference",
      "initializer_preferences",
    ],
    "Plugins": [
      "plugin_intro",
      "plugin_aws_tgw_connect",
      "plugin_bgp_community_services",
      "plugin_cloud_ha",
      "plugin_dns_app_id",
      "plugin_dns_cache",
      "plugin_gre",
      "plugin_ha_sync_redundancy",
      "plugin_http_probe",
      "plugin_icmp_reachability_detection",
      "plugin_ipsec_client",
      "plugin_loopback_static_routes",
      "plugin_m800_watchdog",
      "plugin_monitoring_agent",
      "plugin_mosh",
      "plugin_set_hostname",
      "plugin_sip_alg",
      "plugin_wireguard",
      "plugin_kni_namespace_scripts",
    ],
   "Release Notes": [
      {
        "type": "category",
        "label": "SSR",
        "items": [
          "release_notes_128t_6.0",
          "release_notes_128t_5.6",
          "release_notes_128t_5.5",
          "release_notes_128t_5.4",
          "release_notes_128t_5.3",
          "release_notes_128t_5.2",
          "release_notes_128t_5.1",
          "release_notes_128t_5.0",
          "release_notes_128t_4.5",
          "release_notes_128t_4.4",
          "release_notes_128t_4.3",
          "release_notes_128t_4.2",
          "release_notes_128t_4.1",
          "release_notes_128t_4.0",
        ],
      },
      {
        "type": "category",
        "label": "SSR Installer",
        "items": [
          "release_notes_128t_installer_3.1",
          "release_notes_128t_installer_3.0",
          "release_notes_128t_installer_2.7",
          "release_notes_128t_installer_2.6",
          "release_notes_128t_installer_2.5",
          "release_notes_128t_installer_2.4",
          "release_notes_128t_installer_2.3",
          "release_notes_128t_installer_2.2",
          "release_notes_128t_installer_2.1",
        ],
      },
      {
        "type": "category",
        "label": "WAN Assurance",
        "items": [
          "release_notes_wan_assurance_plugin_3.3",
          "release_notes_wan_assurance_plugin_3.4"
        ]
      }
    ],
  },
};
