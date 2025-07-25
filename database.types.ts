export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      junior_1_details: {
        Row: {
          adimageurl: string
          description: string
          endtime: string
          id: string
          starttime: string
          state: Database["public"]["Enums"]["junior_1_details_state"]
          subtitle: string | null
          title: string
          venue: string
        }
        Insert: {
          adimageurl: string
          description: string
          endtime: string
          id?: string
          starttime: string
          state?: Database["public"]["Enums"]["junior_1_details_state"]
          subtitle?: string | null
          title: string
          venue: string
        }
        Update: {
          adimageurl?: string
          description?: string
          endtime?: string
          id?: string
          starttime?: string
          state?: Database["public"]["Enums"]["junior_1_details_state"]
          subtitle?: string | null
          title?: string
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_venue"
            columns: ["venue"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      senior_3_details: {
        Row: {
          adimageurl: string
          description: string
          endtime: string
          id: string
          starttime: string
          state: Database["public"]["Enums"]["senior_3_details_state"]
          subtitle: string | null
          title: string
          venue: string
        }
        Insert: {
          adimageurl: string
          description: string
          endtime: string
          id?: string
          starttime: string
          state?: Database["public"]["Enums"]["senior_3_details_state"]
          subtitle?: string | null
          title: string
          venue: string
        }
        Update: {
          adimageurl?: string
          description?: string
          endtime?: string
          id?: string
          starttime?: string
          state?: Database["public"]["Enums"]["senior_3_details_state"]
          subtitle?: string | null
          title?: string
          venue?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_venue"
            columns: ["venue"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      venues: {
        Row: {
          id: string
          venue_floor: number
          venue_name: string
        }
        Insert: {
          id?: string
          venue_floor: number
          venue_name: string
        }
        Update: {
          id?: string
          venue_floor?: number
          venue_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      event_state: "upcoming" | "preparing" | "active" | "finished"
      junior_1_details_state: "σà¼Θûïσëì" | "σà¼ΘûïΣ╕¡" | "σà¼Θûïτ╡éΣ║å"
      senior_3_details_state:
        | "σà¼µ╝öσëì"
        | "σàÑσá┤σÅùΣ╗ÿΣ╕¡"
        | "σàÑσá┤τ╖áσêç/σà¼µ╝öΣ╕¡"
        | "σà¼µ╝öτ╡éΣ║å"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      event_state: ["upcoming", "preparing", "active", "finished"],
      junior_1_details_state: ["σà¼Θûïσëì", "σà¼ΘûïΣ╕¡", "σà¼Θûïτ╡éΣ║å"],
      senior_3_details_state: [
        "σà¼µ╝öσëì",
        "σàÑσá┤σÅùΣ╗ÿΣ╕¡",
        "σàÑσá┤τ╖áσêç/σà¼µ╝öΣ╕¡",
        "σà¼µ╝öτ╡éΣ║å",
      ],
    },
  },
} as const
